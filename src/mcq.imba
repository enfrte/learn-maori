# Shared multiple-choice component.
# q:       {prompt, options (array of strings), correct (string), pick (null|string)}
# emitter: parent callback, called with the chosen option.

tag mcq
	q = null
	emitter = null

	css self d:block
	css .q-prompt d:block fs:1.4rem fw:600 mb:3
	css .q-options d:grid gap:2
	css .opt w:100% ta:left p:3 fs:1.1rem rd:4 bg:gray2 c:warm9
		bd:2px solid transparent @hover:indigo4
	css .right bd:2px solid green5
	css .wrong bg:red3 bd:2px solid red5
	css .dim o:0.45

	def pick-opt opt
		if self.q and self.q.pick
			return
		if !self.q
			return
		self.q.pick = opt
		if self.emitter
			self.emitter(opt)

	<self>
		if self.q
			<div.q-prompt> self.q.prompt
			<div.q-options>
				for opt in self.q.options
					<button.primary
						.right=(self.q.pick and opt == self.q.correct)
						.wrong=(self.q.pick and self.q.pick != self.q.correct and opt == self.q.pick)
						.dim=(self.q.pick and opt != self.q.correct and opt != self.q.pick)
						@click=self.pick-opt(opt)>
						opt
