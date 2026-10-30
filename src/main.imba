import {learnedStats} from './data/dictionary'
import {loadProgress, resetAll, keyInProgress, keyLearned} from './data/store'
import {loadSetting, saveSetting, keyTheme} from './data/store'

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
	$error: red7        # error text links
	$ok: green6         # success text

global css html.dark
	$bg: warm8
	$surface: warm7
	$hover: warm6
	$text: warm2
	$strong: warm1
	$muted: warm4
	$border: warm5
	$error: red3
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
global css .primary c:white p:3 px:5 rd:4 fs:1rem fw:600 cursor:pointer bg:#263f2d @hover:#a53c24
global css .secondary c:$muted p:3 px:5 rd:4 fs:1rem cursor:pointer bd:2px solid $border bg:transparent @hover:$hover
global css .back c:$muted p:2 px:3 rd:4 fs:0.9rem cursor:pointer bd:2px solid $border bg:transparent @hover:$hover
global css .disabled o:0.45 pe:none
global css .danger bg:transparent fs:0.85rem p:2 rd:2 cursor:pointer bd:0 c:$muted @hover:$error
global css .theme-toggle bg:transparent fs:0.85rem p:2 px:3 rd:2 cursor:pointer bd:0 c:$muted @hover:$text
global css .word-list d:flex flex-wrap:wrap gap:3
global css .word bg:$surface rd:4 p:3 min-width:180px flex:1 1 220px
global css .word .mi d:block fs:1.5rem fw:700 c:$strong
global css .word .en d:block fs:0.95rem c:$muted mt:1
global css .tracker c:$muted mb:3 fs:0.95rem
global css .feedback mt:3 c:$error fs:1rem
global css .feedback.ok c:$ok
global css .plain-btn bg:$surface
global css .hr h:2px c:$surface bg:$surface border:0


# ---- theme bootstrap ----
# Light is the default. A saved "dark" preference adds the `dark` class
# to <html> before the app mounts, so there is no flash of the wrong theme.

def set-theme theme
	document.documentElement.classList.toggle('dark', theme == 'dark')

let startTheme = (loadSetting(keyTheme) == 'dark') ? 'dark' : 'light'
set-theme(startTheme)

# ---- landing page ----
# Introduction, progress stats and stage selection.

tag landing-page
	loaded = no
	theme = 'light'      # light | dark (prop, owned by app)
	inprogress-ids = []
	learned-ids = []
	stats = {count: 0, total: 0, percent: 0}

	def mount
		await self.refresh!

	def refresh
		let inProgress = await loadProgress(keyInProgress)
		let learned = await loadProgress(keyLearned)
		self.inprogress-ids = inProgress
		self.learned-ids = learned
		self.stats = learnedStats(learned)
		self.loaded = yes
		imba.commit!

	def reset-all
		unless global.confirm('Reset all progress? This clears learned and in-progress words.')
			return
		await resetAll!
		self.learned-ids = []
		self.inprogress-ids = []
		self.stats = learnedStats([])
		imba.commit!

	def toggle-theme
		self.emit('toggle-theme')

	<self>
		<div.hero>
			<h1> "Learn Māori"
			<p.lead> "Learn te reo Māori, one word at a time. Pick a stage below - your progress is saved automatically on this device."
		<div.stats>
			<div>
				<span.label> "Learned"
				<span.value> "{self.stats.percent}%"
			<div>
				<span.label> "Words"
				<span.value> "{self.stats.count} / {self.stats.total}"
			<div>
				<span.label> "In progress now"
				<span.value> "{self.inprogress-ids.length}"
		<div.stage-card.card>
			<h2> "Stage 1 · Single words"
			<p> "Review new words, then test recall from word to English and back."
			<div.row>
				<button.primary @click=(self.emit('learn'))> "Learn new words"
				<button.secondary
					.disabled=(self.loaded and !self.learned-ids.length)
					@click=(self.emit('recall'))>
					"Recall learned words ({self.learned-ids.length})"
		<div.card.locked>
			<h2> "Stage 2"
			<p> "To be announced."
		<div.card.locked>
			<h2> "Stage 3"
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

	def toggle-theme
		self.theme = self.theme == 'light' ? 'dark' : 'light'
		set-theme(self.theme)
		saveSetting(keyTheme, self.theme)

	def mount
		# deep links: #learn or #recall land directly in stage 1
		self.sync-hash!
		global.addEventListener('hashchange', do self.sync-hash!)

	def sync-hash
		let hash = self.location-hash
		if hash == 'learn'
			unless self.view == 'learn'
				self.view = 'learn'
				imba.commit!
		elif hash == 'recall'
			unless self.view == 'recall'
				self.view = 'recall'
				imba.commit!
		elif hash == ''
			unless self.view == 'landing'
				self.view = 'landing'
				imba.commit!

	get location-hash
		(global.location.hash or '').replace('#', '')

	def show-learn
		self.view = 'learn'

	def show-recall
		self.view = 'recall'

	def show-landing
		self.view = 'landing'

	<self>
		<div.app-shell>
			if self.view == 'landing'
				<landing-page theme=self.theme @toggle-theme=(do self.toggle-theme!) @learn=(do self.show-learn!) @recall=(do self.show-recall!)>
			elif self.view == 'learn'
				<learn-page @close=(do self.show-landing!)>
			else
				<recall-page @close=(do self.show-landing!)>

imba.mount <app>
