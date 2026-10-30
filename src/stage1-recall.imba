import {word, distractors, shuffled} from './data/dictionary'
import {loadProgress, keyLearned} from './data/store'

def english e
	e.en.length ? e.en[0] : ''

def ascending a, b
	a - b

# Stage 1 - Recall mode.
# Tests every word from the "learned" store. The queue starts at the lowest
# dictionary id. A correct answer moves the word to the last position of the
# queue; a wrong answer moves it 5 places after the current position.

tag recall-page
	phase = 'loading'    # loading | empty | quiz | done
	queue = []           # dictionary ids in practice order
	pos = 0              # position of the current word in the queue
	question = null      # {prompt, options, correct, pick, was-right}
	answered = 0
	correct = 0

	def mount
		await self.setup!

	def setup
		let learned = await loadProgress(keyLearned)
		unless learned.length
			self.phase = 'empty'
			imba.commit!
			return
		self.queue = learned.slice(0).sort(ascending)
		self.pos = 0
		self.update-question!
		self.phase = 'quiz'
		imba.commit!

	def update-question
		let entry = word(self.queue[self.pos])
		unless entry
			# dangling id (dictionary changed) - drop it from the queue
			self.queue.splice(self.pos, 1)
			if self.pos >= self.queue.length
				self.pos = 0
			if !self.queue.length
				self.question = null
				self.phase = 'done'
				return
			return self.update-question!
		let options = [entry.mi]
		for w in distractors(entry, 3)
			options.push(w.mi)
		self.question = {prompt: "How do you say “{english(entry)}” in te reo Māori?", options: shuffled(options), correct: entry.mi, pick: null, was-right: no}

	def answer-picked opt
		# double-picks are already blocked inside the mcq component
		let q = self.question
		unless q
			return
		q.was-right = (opt == q.correct)
		q.pick = opt
		self.answered++
		if q.was-right
			self.correct++

	def apply-moves was-right
		let queue = self.queue
		let entry = queue.splice(self.pos, 1)[0]
		# the next word takes the current position; wrap past the end
		if self.pos >= queue.length
			self.pos = 0
		if was-right
			# move the word to the last position of the queue
			queue.push(entry)
		else
			# move the word 5 places after the current position
			let insert-at = Math.min(self.pos + 5, queue.length)
			queue.splice(insert-at, 0, entry)

	def advance
		let q = self.question
		unless q
			return
		unless q.pick
			return
		self.apply-moves(q.was-right)
		if !self.queue.length
			self.question = null
			self.phase = 'done'
			imba.commit!
			return
		self.update-question!

	<self>
		<div.page-head>
			<button.back @click=self.emit('close')> "Back"
			<h1> "Stage 1 · Recall words"
		if self.phase == 'loading'
			<div.tracker> "Loading progress…"
		elif self.phase == 'empty'
			<div.tracker> "No learned words yet. Learn some words in Stage 1 first."
		elif self.phase == 'done'
			<div.tracker> "All recalls complete!"
		else
			<div.tracker> 
				"{self.queue.length} learned words · {self.correct} correct of {self.answered} answered"
			<mcq q=self.question emitter=(do(opt) self.answer-picked(opt))>
			if self.question and self.question.pick
				if self.question.was-right
					<div.feedback.ok> "Correct!"
				else
					<div.feedback> "Not quite - it will come back around soon."
				<div.row>
					<button.primary @click=self.advance> "Next"
