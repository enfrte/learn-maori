import Dexie from 'dexie'
import {topicId} from './topics'

# Persistent local data store.
# One Dexie table "progress", keyed by store key. Progress keys are scoped
# per topic - "in-progress:<topic id>" and "learned:<topic id>" - and each
# record holds dictionary ids from that topic's dictionary. resetAll clears
# the whole table, resetting every topic-based progress store.

let db = new Dexie('learn-maori')
db.version(1).stores({progress: 'key'})
let table = db.table('progress')

export def keyInProgress topic
	"in-progress:{topicId(topic)}"

export def keyLearned topic
	"learned:{topicId(topic)}"

# record shape: {key: string, ids: [dictionary ids]}
export def loadProgress key
	let record = await table.get(key)
	if record and record.ids
		return record.ids.slice(0)
	[]

export def saveProgress key, ids
	await table.put({key: key, ids: ids})
	ids

export def resetAll
	await table.clear()
	yes

# ---- settings ----
# Small user preferences (theme etc.) kept in localStorage, separate from
# the Dexie-based progress store. localStorage is synchronous, so the
# theme can be applied before the app first renders.

export let keyTheme = 'theme'

# record shape: {key: "theme", value: "light" | "dark"}
export def loadSetting key
	try
		return global.localStorage.getItem(key)
	catch e
		return null

export def saveSetting key, value
	try
		return global.localStorage.setItem(key, value)
	catch e
		return null
