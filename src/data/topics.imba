import nounsText from '../topics/mi-en-dic-nouns-by-frequency.jsonl?text'
import verbsText from '../topics/mi-en-dic-verbs-by-frequency.jsonl?text'
import adjectivesText from '../topics/mi-en-dic-adjectives-by-frequency.jsonl?text'
import adverbsText from '../topics/mi-en-dic-adverbs-by-frequency.jsonl?text'

# Topic registry.
# A topic is one packaged dictionary file shown as its own learning track,
# with its own progress store. Each TOPIC_ identifier below maps a name to
# the topic (id, label, packaged file) and the topic's id scopes its
# progress store keys (see data/store.imba).
# Adding a topic: drop a .jsonl file into src/topics/, import its text
# here, register a TOPIC_ identifier and push it into TOPICS.

# record shape: {id: string, label: string, file: string}
export let TOPIC_NOUNS = {id: 'nouns', label: 'Nouns', file: 'src/topics/mi-en-dic-nouns-by-frequency.jsonl'}
export let TOPIC_VERBS = {id: 'verbs', label: 'Verbs', file: 'src/topics/mi-en-dic-verbs-by-frequency.jsonl'}
export let TOPIC_ADJECTIVES = {id: 'adjectives', label: 'Adjectives', file: 'src/topics/mi-en-dic-adjectives-by-frequency.jsonl'}
export let TOPIC_ADVERBS = {id: 'adverbs', label: 'Adverbs', file: 'src/topics/mi-en-dic-adverbs-by-frequency.jsonl'}

export let TOPICS = [TOPIC_NOUNS, TOPIC_VERBS, TOPIC_ADJECTIVES, TOPIC_ADVERBS]

# A topic is addressed either as its id string (used in deep links, store
# keys and function calls) or as the full topic record from the registry.
export def topicId topic
	topic isa 'object' ? topic.id : topic

export def topicById id
	for t in TOPICS
		if t.id == id
			return t
	return null

# Packaged text for every topic, keyed by the topic id of the exported
# .jsonl file. The dictionary loader resolves a topic's text through this.
let rawTexts = {}
rawTexts[TOPIC_NOUNS.id] = nounsText
rawTexts[TOPIC_VERBS.id] = verbsText
rawTexts[TOPIC_ADJECTIVES.id] = adjectivesText
rawTexts[TOPIC_ADVERBS.id] = adverbsText

export def rawText id
	rawTexts[id]
