import {learnedStats} from './data/dictionary'
import {loadProgress, resetAll, keyInProgress, keyLearned} from './data/store'
import {loadSetting, saveSetting, keyTheme} from './data/store'
import {TOPICS, TOPIC_NOUNS, topicById} from './data/topics'

import './mcq'
import './stage1-learn'
import './stage1-recall'

# ---- theme ----
# Colors come from semantic tokens. The light palette on :root is the
# default; the same tokens are overridden under html.dark with the
# original dark palette. The `dark` class is toggled on the document
# element by the app tag and persisted via the settings store.

global css @root
	$bg: #e9eeac          # page background
	$surface: white     # cards, stats, word tiles
	$hover: warm2       # quiet button hover surface
	$text: #0d1713        # body text
	$strong: #0d1713      # emphasized text (word tiles)
	$muted: #0d1713       # secondary text and borders' contrast companion
	$border: warm4      # outlines on quiet buttons
	$error: red5        # error text links
	$ok: green6         # success text
	# Māori color palette...
	$mi-flax-fiber: #e9eeac 
	$mi-greenstone: #263f2d 
	$mi-red-ochre: #a53c24 
	$mi-fire: #f68b29 
	$mi-black: #0d1713

global css html.dark
	$bg: warm8
	$surface: warm7
	$hover: warm6
	$text: warm2
	$strong: warm1
	$muted: warm4
	$border: warm5
	$error: red5
	$ok: green4

global css body inset:0 m:0 bg:$bg c:$text ff:Arial
global css .app-shell max-width:960px p:5 ml:auto mr:auto
global css .page-head d:flex ai:center gap:4 mb:5
global css .page-head h1 fs:1.5rem fw:700 m:0
global css .hero mb:6
global css .hero h1 fs:2.4rem fw:800 m:0 mb:2
global css .lead c:$muted fs:1.05rem m:0 mb:2 max-width:640px
global css .stats d:flex flex-wrap:wrap gap:5 ai:center bg:$surface rd:4 p:4 mb:5
global css .stats .label c:$muted fs:0.85rem d:block
global css .stats .value fs:1.3rem fw:700
global css .card bg:$surface rd:4 p:5 mb:4
global css .card h2 m:0 mb:2 fs:1.2rem
global css .card p c:$muted m:0
global css .row d:flex gap:3 flex-wrap:wrap mt:4
global css .footer d:flex gap:3 flex-wrap:wrap ai:center mt:4
# Buttons
global css .next-btn bg:$mi-greenstone c:white rd:4 p:3 flex:1 1 100% d:block fs:1.2rem fw:700 
global css .mi-red-ochre-btn c:white p:3 px:5 rd:4 fs:1rem fw:600 cursor:pointer bg:$mi-red-ochre @hover:#a53c24
global css .secondary c:$muted p:3 px:5 rd:4 fs:1rem cursor:pointer bd:2px solid $border bg:transparent @hover:$hover
global css .primary c:white p:3 px:5 rd:4 fs:1rem fw:600 cursor:pointer bg:#263f2d @hover:#a53c24
global css .back c:$muted p:2 px:3 rd:4 fs:0.9rem cursor:pointer bd:2px solid $border bg:transparent @hover:$hover
global css .disabled o:0.45 pe:none
global css .danger bg:transparent fs:0.85rem p:2 rd:2 cursor:pointer bd:0 c:$muted @hover:$error
global css .word-list d:flex flex-wrap:wrap gap:3
global css .word bg:$surface rd:4 p:3 min-width:180px flex:1 1 220px
global css .word .mi d:inline fs:1.5rem fw:700 c:$strong
global css .word .en d:block fs:0.95rem c:$muted mt:1
global css .word .gr d:inline fs:0.95rem c:$muted px:2
global css .options-btn bg:$surface rd:4 p:5 flex:1 1 100% d:block fs:1.2rem fw:500 c:$strong cursor:pointer
global css .tracker c:$muted mb:3 fs:0.95rem
global css .feedback mt:3 c:$error fs:1rem
global css .feedback.ok c:$ok
global css .plain-btn bg:$surface
global css .hr h:2px c:$surface bg:$surface border:0
global css .theme-toggle fs:0.85rem p:2 px:3 rd:2 cursor:pointer bd:0 c:$muted @hover:$text

const IS_DEV = location.hostname == 'localhost'

# ---- theme bootstrap ----
# Light is the default. A saved "dark" preference adds the `dark` class
# to <html> before the app mounts, so there is no flash of the wrong theme.

def set-theme theme
	document.documentElement.classList.toggle('dark', theme == 'dark')

let startTheme = (loadSetting(keyTheme) == 'dark') ? 'dark' : 'light'
set-theme(startTheme)

# ---- landing page ----
# Introduction, per-topic progress stats and topic selection.

tag landing-page
	loaded = no
	theme = 'light'      # light | dark (prop, owned by app)
	learned = {}         # topic id -> learned ids
	inprogress = {}      # topic id -> in-progress ids

	def mount
		await self.refresh!

	def refresh
		for t in TOPICS
			self.learned[t.id] = await loadProgress(keyLearned(t.id))
			self.inprogress[t.id] = await loadProgress(keyInProgress(t.id))
		self.loaded = yes
		imba.commit!

	def learned-for t
		self.learned[t.id] or []

	def inprogress-for t
		self.inprogress[t.id] or []

	def stats-for t
		learnedStats(t, self.learned-for(t))

	def reset-all
		unless global.confirm('Reset all progress? This clears learned and in-progress words for every topic.')
			return
		await resetAll!
		for t in TOPICS
			self.learned[t.id] = []
			self.inprogress[t.id] = []
		imba.commit!

	def toggle-theme
		self.emit('toggle-theme')

	<self>
		if IS_DEV
			<div [bg:yellow c:black p:2 bd:3px solid red]>
				"Warning! Debug mode: On"
		<div.hero>
			<h1> "Learn Māori"
			<p.lead> "Learn te reo Māori, one word at a time. Pick a topic below - your progress is saved automatically on this device."
		for t in TOPICS
			<div.stage-card.card key=t.id>
				<h2> t.label
				<p> "Review new words, then test recall from word to English and back."
				<div.tracker>
					"Learned {self.stats-for(t).count} / {self.stats-for(t).total} ({self.stats-for(t).percent}%) · {self.inprogress-for(t).length} in progress"
				<div.row>
					<button.primary @click=(self.emit('learn', t.id))> "Learn new words"
					<button.mi-red-ochre-btn
						.disabled=(self.loaded and !self.learned-for(t).length)
						@click=(self.emit('recall', t.id))>
						"Recall learned words ({self.learned-for(t).length})"
		<div.card.locked>
			<h2> "More topics"
			<p> "To be announced."
		<hr.hr>
		<div.footer>
			<button.danger.plain-btn @click=(do self.reset-all!)> "Reset progress"
			# shows the theme the switch will jump to
			<button.theme-toggle.plain-btn @click=(do self.toggle-theme!)>
				if self.theme == 'dark'
					"☀️ Light mode"
				else
					"🌙 Dark mode"

# ---- app root ----

tag app
	view = 'landing'    # landing | learn | recall
	theme = startTheme  # light | dark, default light
	topic = TOPIC_NOUNS.id  # topic id for the learn/recall views

	def toggle-theme
		self.theme = self.theme == 'light' ? 'dark' : 'light'
		set-theme(self.theme)
		saveSetting(keyTheme, self.theme)

	def mount
		# deep links: #learn/<topic> or #recall/<topic> land directly in a topic
		self.sync-hash!
		global.addEventListener('hashchange', do self.sync-hash!)

	def sync-hash
		let parts = self.location-hash.split('/')
		let view = parts[0]
		let topic = topicById(parts[1]) ? parts[1] : TOPIC_NOUNS.id
		if view == 'learn'
			unless self.view == 'learn' and self.topic == topic
				self.topic = topic
				self.view = 'learn'
				imba.commit!
		elif view == 'recall'
			unless self.view == 'recall' and self.topic == topic
				self.topic = topic
				self.view = 'recall'
				imba.commit!
		elif view == ''
			unless self.view == 'landing'
				self.view = 'landing'
				imba.commit!

	get location-hash
		(global.location.hash or '').replace('#', '')

	def show-learn topic
		self.topic = topic
		self.view = 'learn'

	def show-recall topic
		self.topic = topic
		self.view = 'recall'

	def show-landing
		self.view = 'landing'

	<self>
		<div.app-shell>
			if self.view == 'landing'
				<landing-page theme=self.theme
					@toggle-theme=(do self.toggle-theme!)
					@learn=(do(e) self.show-learn(e.detail))
					@recall=(do(e) self.show-recall(e.detail))>
			elif self.view == 'learn'
				<learn-page topic=self.topic @close=(do self.show-landing!)>
			else
				<recall-page topic=self.topic @close=(do self.show-landing!)>

imba.mount <app>
