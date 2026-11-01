import rawText from '../maori-english-dictionary-commonly-ordered.jsonl?text'

# Dictionary ids are stable indexes: the position of the word in the
# packaged dictionary file. All progress in the data store refers to these ids.

let words = []
let groups = {}
const IS_DEV = location.hostname == 'localhost'

def english e
	e.en.length ? e.en[0] : ''

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

# Parse the packaged dictionary once on import.
for rawLine in rawText.split("\n")
	let line = rawLine.trim!
	unless line
		continue
	let item = JSON.parse(line)
	let entry = {id: words.length, mi: item.mi, gr: item.gr, en: item.en or []}
	words.push(entry)
	if !groups[entry.gr]
		groups[entry.gr] = []
	groups[entry.gr].push(entry)

export def word id
	words[id]

export def wordCount
	words.length

export def toIds entries
	let ids = []
	for e in entries
		ids.push(e.id)
	ids

export def learnedStats learned-ids
	let total = words.length
	let count = learned-ids.length
	let percent = total ? Math.round(count * 100 / total) : 0
	{count: count, total: total, percent: percent}

# Picks n random words the student has not seen yet,
# excluding every id in the excluded collection.
export def pickUnseen n, excluded
	let excluded-set = new Set(excluded or [])
	let unseen = []
	for w in words
		if excluded-set.has(w.id)
			continue
		unseen.push(w)
	if IS_DEV
		# console.log('pickUnseen - unseen', shuffled(unseen).slice(0, n))
		# console.log('pickUnseen - excluded-set', excluded-set)
	unseen.slice(0, n) # shuffled(unseen).slice(0, n)

# Multiple-choice decoys for a word. Words from the same grammatical
# class are preferred so options feel plausible; falls back to any word.
export def distractors entry, want = 3
	let picks = []
	let used-mi = {}
	let used-en = {}
	used-mi[entry.mi] = yes
	used-en[english(entry)] = yes
	add-picks(picks, used-mi, used-en, (groups[entry.gr] or []), want)
	if picks.length < want
		add-picks(picks, used-mi, used-en, words, want)
	if IS_DEV
		# console.log('pickUnseen - used-mi', used-mi)
		# console.log('pickUnseen - used-en', used-en)
	picks
