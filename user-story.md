

In places that call <div.word-list> like @src/stage1-learn.imba and @src/mcq.imba - the words that are stored in the "en": array only output the first element. 
We need to change this so that for only "en" output, the output of `for opt in self.q.options` shows all the elements of the array. For example 

{"mi": "whare", "gr": "noun", "en": ["house", "any building", "people in a house", "suit (cards)"]}

would show 

"1. house, 2. any building, 3. people in a house, 4. suit (cards)"

however a single entry woul not be numbered. for example 

{"mi": "tangata", "gr": "noun", "en": ["human being, person, man"]}

would show 

"human being, person, man"

