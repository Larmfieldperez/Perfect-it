//ACTION TYPES
const GOT_WORDS = 'GOT_WORDS';
const UPDATE_WORDS = 'UPDATE_WORDS';
//not sure what is needed exactly but will see

const initialState = {
  words: [],
};

//ACTION CREATORS
const gotWords = words => ({
  //this should be used by recording component? get the words to be able to know what words to count
  type: GOT_WORDS,
  words,
});

export const updateWords = words => ({
  //this should only be used by input component, set the words that need to be counted
  type: UPDATE_WORDS,
  words,
});
// ***later we can work on separating the counts by word ***

//REDUCER
const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_WORDS:
      return state;

    case UPDATE_WORDS:
      return {
        words: [...action.words],
      };
    default:
      return state;
  }
};

export default wordReducer;
