import {topicId, rawText} from './topics'

# Topic dictionaries.
# Ids are stable indexes per topic: the position of the word in the topic's
# packaged .jsonl file. All progress in the data store refers to these ids.

const IS_DEV = location.hostname == 'localhost'
let byTopic = {}

def english e
	unless e.en.length
		return ''
	if e.en.length == 1
		return e.en[0]
	let parts = []
	for d, i in e.en
		parts.push("{i + 1}. {d}")
	parts.join(', ')

# Shuffles a copy of the array (Fisher-Yates).
export def shuffled arr
	let copy = arr.slice(0)
	let i = copy.length - 1
	while i > 0
		let j = Math.floor(Math.random() * (i + 1))
		let tmp = copy[i]
		copy[i] = copy[j]
		copy[j] = tmp
		i--
	copy

def add-picks picks, used-mi, used-en, pool, want
	pool = shuffled(pool)
	for w in pool
		if picks.length >= want
			break
		if used-mi[w.mi] or used-en[english(w)]
			continue
		used-mi[w.mi] = yes
		used-en[english(w)] = yes
		picks.push(w)
	if IS_DEV
		# console.log 'add-picks - picks', picks
	return

# Parses one packaged topic file into {words, groups}.
def parse text
	let words = []
	let groups = {}
	for rawLine in text.split("\n")
		let line = rawLine.trim!
		unless line
			continue
		let item = JSON.parse(line)
		let entry = {id: words.length, mi: item.mi, gr: item.gr, en: item.en or []}
		words.push(entry)
		if !groups[entry.gr]
			groups[entry.gr] = []
		groups[entry.gr].push(entry)
	{words: words, groups: groups}

# Parses and memoizes each topic's dictionary on first use. Functions take
# the topic as its id string or the topic record from data/topics.
export def topicDict topic
	let id = topicId(topic)
	unless byTopic[id]
		let text = rawText(id)
		byTopic[id] = text ? parse(text) : {words: [], groups: {}}
	byTopic[id]

export def word topic, id
	topicDict(topic).words[id]

export def wordCount topic
	topicDict(topic).words.length

export def toIds entries
	let ids = []
	for e in entries
		ids.push(e.id)
	ids

export def learnedStats topic, learned-ids
	let total = topicDict(topic).words.length
	let count = learned-ids.length
	let percent = total ? Math.round(count * 100 / total) : 0
	{count: count, total: total, percent: percent}

# Picks n random words the student has not seen yet,
# excluding every id in the excluded collection.
export def pickUnseen topic, n, excluded
	let excluded-set = new Set(excluded or [])
	let unseen = []
	for w in topicDict(topic).words
		if excluded-set.has(w.id)
			continue
		unseen.push(w)
	if IS_DEV
		# console.log('pickUnseen - unseen', shuffled(unseen).slice(0, n))
		# console.log('pickUnseen - excluded-set', excluded-set)
	unseen.slice(0, n) # shuffled(unseen).slice(0, n)

# Multiple-choice decoys for a word. Words from the same grammatical
# class are preferred so options feel plausible; falls back to any word.
export def distractors topic, entry, want = 3
	let dict = topicDict(topic)
	let picks = []
	let used-mi = {}
	let used-en = {}
	used-mi[entry.mi] = yes
	used-en[english(entry)] = yes
	add-picks(picks, used-mi, used-en, (dict.groups[entry.gr] or []), want)
	if picks.length < want
		add-picks(picks, used-mi, used-en, dict.words, want)
	if IS_DEV
		# console.log('pickUnseen - used-mi', used-mi)
		# console.log('pickUnseen - used-en', used-en)
	picks
