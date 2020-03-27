import {CLEAR_SCORE, ADD_POINTS} from './types';

const initialState = {
  score: 0,
};

const score = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_SCORE:
      return {...state, score: initialState.score};

    case ADD_POINTS:
      return {
        ...state,
        score:
          state.score + action.payload > 0 ? state.score + action.payload : 0,
      };

    default:
      return {...state};
  }
};

export default score;
