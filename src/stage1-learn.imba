import {pickUnseen, word, distractors, shuffled, toIds} from './data/dictionary'
import {loadProgress, saveProgress, keyInProgress, keyLearned} from './data/store'

let BATCH = 5

def english e
	e.en.length ? e.en[0] : ''

# Stage 1 - Learning mode.
# Reviews a batch of 5 new words, then tests recall in both directions.
# Words answered wrongly come back around until every word is recalled.
# A completed batch moves from "in-progress" into the "learned" store,
# and a new batch of 5 words follows, repeating the process.

tag learn-page
	phase = 'loading'    # loading | review | quiz
	round = 'maori-en'   # maori-en | en-maori
	batch = []           # the 5 entries of the current batch
	queue = []           # entries still to recall in the current round
	question = null      # {entry, prompt, options, correct, pick, was-right}
	attempts = 0
	misses = 0

	def mount
		await self.setup!

	def setup
		let stored-ids = await loadProgress(keyInProgress)
		let learned-ids = await loadProgress(keyLearned)
		# resume an unfinished batch, otherwise pick 5 unseen words
		let ids = stored-ids.length ? stored-ids : toIds(pickUnseen(BATCH, learned-ids))
		self.batch = self.entries-for(ids)
		if !stored-ids.length
			await saveProgress(keyInProgress, toIds(self.batch))
		self.phase = 'review'
		imba.commit!

	def entries-for ids
		let entries = []
		for id in ids
			let w = word(id)
			if w
				entries.push(w)
		entries

	def start-quiz round
		self.queue = self.batch.slice(0)
		self.round = round
		self.attempts = 0
		self.misses = 0
		self.phase = 'quiz'
		self.next-question!

	def next-question
		if !self.queue.length
			if self.round == 'maori-en'
				return self.start-quiz('en-maori')
			self.complete-batch!
			return
		let entry = self.queue[0]
		if self.round == 'maori-en'
			let options = [english(entry)]
			for w in distractors(entry, 3)
				options.push(english(w))
			self.question = {entry: entry, prompt: "What does “{entry.mi}” mean?", options: shuffled(options), correct: english(entry), pick: null, was-right: no}
		else
			let options = [entry.mi]
			for w in distractors(entry, 3)
				options.push(w.mi)
			self.question = {entry: entry, prompt: "How do you say “{english(entry)}” in te reo Māori?", options: shuffled(options), correct: entry.mi, pick: null, was-right: no}

	def answer-picked opt
		# double-picks are already blocked inside the mcq component
		let q = self.question
		unless q
			return
		self.attempts++
		let right = (opt == q.correct)
		unless right
			self.misses++
			# come back around at the end of the queue
			self.queue.push(q.entry)
		q.was-right = right
		q.pick = opt

	def advance
		unless self.phase == 'quiz'
			return
		let q = self.question
		unless q
			return
		unless q.pick
			return
		# the head word is consumed either way; a wrongly answered word
		# was re-queued at the end by answer-picked
		self.queue.shift!
		q.pick = null
		self.next-question!

	def complete-batch
		# guard against repeated "Continue" clicks while saving
		self.phase = 'review'
		let learned = await loadProgress(keyLearned)
		for w in self.batch
			if learned.indexOf(w.id) == -1
				learned.push(w.id)
		await saveProgress(keyLearned, learned)
		await saveProgress(keyInProgress, [])
		# 5 new words are presented and the process repeats
		let unseen-ids = toIds(pickUnseen(BATCH, learned))
		await saveProgress(keyInProgress, unseen-ids)
		self.batch = self.entries-for(unseen-ids)
		imba.commit!

	<self>
		<div.page-head>
			<button.back @click=self.emit('close')> "Back"
			<h1> "Stage 1 · Learn words"
		if self.phase == 'loading'
			<div.tracker> "Loading progress…"
		elif self.phase == 'review'
			if self.batch.length
				<h2> "New words ({self.batch.length})"
				<div.word-list>
					for w in self.batch
						<div.word key=w.id>
							<div.mi> w.mi
							<div.en> english(w)
				<div.row>
					<button.primary @click=self.start-quiz('maori-en')> "Test me"
			else
				<div.tracker> "Kua oti! You have learned every word in the dictionary."
		elif self.phase == 'quiz'
			<div.tracker>
				"{self.round == 'maori-en' ? 'Word → English' : 'English → Word'} · {self.queue.length} to go · {self.misses} retries"
			<mcq q=self.question emitter=(do(opt) self.answer-picked(opt))>
			if self.question and self.question.pick
				if self.question.was-right
					<div.feedback.ok> "Correct!"
				else
					<div.feedback> "It will come back around in a moment."
				<div.row>
					<button.primary @click=self.advance> "Continue"
