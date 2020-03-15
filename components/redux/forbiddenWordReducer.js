//ACTION TYPES
const GOT_WORDS = 'GOT_WORDS';
const UPDATE_WORDS = 'UPDATE_WORDS';
//not sure what is needed exactly but will see

const initialState = {
  words: ['peep'],
};

//ACTION CREATORS
const gotWords = words => ({
  type: GOT_WORDS,
  words,
});

const updateWords = words => ({
  type: UPDATE_WORDS,
  words,
});

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_WORDS:
      return {
        words: [...state.words],
      };
    case UPDATE_WORDS:
      return {
        words: [...action.words],
      };
  }
}
