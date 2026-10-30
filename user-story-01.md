
## About 

As a software engineer, I want to design a learn maori language course that the student can complete in stages. 


## Features 

* Save progress to local data store. 
* Reset progress.
* Learn and recall modes. 
* Stats - Learned words percentage of words in db. 


## Stage 1 data store 

* Data store keys "in-progress" and "learned" record dictionary ids. 


## Landing page

* Introduction text.
* UI to show and select stages. 


## Stage 1. 

* Learn single words. 
* Stage has two options - "learn new words", and "recall learned words".


## Stage 2. 

* TBA.


## Stage 3. 

* TBA.


## Scenarios 

### Stage 1.0 Scenario

#### Learning mode
User opens app for first time. 
User selects stage 1 - Learning mode. 
User reviews 5 new maori words from the dictionary. These new words are saved in "in-progress" local stage 1 data store. 
After review, user is tested if they recall the english meanings from multiple choice.
After all words have been recalled correctly, test is repeated, but english word is presented and user selects from multiple choice of maori words. 
After all words have been successfully recalled, dictionary ids are saved to "learned" data store and 5 new words are presented and process is repeated. 

### Stage 1.1 Scenario

#### Recall mode. 
User opens Stage 1 recall mode. 
User is tested on words from the learned data store. 
Start/order at the lowest index. If user guesses correctly, move word to the last position of the index. If the user guesses incorrectly, move the word 5 places after the current position. 

## Technology

* Use @src/maori-english-dictionary.jsonl as the application's Māori–English dictionary data source.
* The application is written in Imba. Use Imba for all application logic and UI. Access the Imba skills for AI in your skills. If you cannot find the skills, stop and let me know. Confirm all the imba skills you find with me. 
* Use IndexedDB as the application's persistent local database.
* Use Dexie.js as the IndexedDB wrapper and database abstraction layer.
* Do not introduce another database library or storage abstraction.
