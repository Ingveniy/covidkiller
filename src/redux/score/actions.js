import {CLEAR_SCORE, ADD_POINTS} from './types';

export const addPoints = points => {
  return {type: ADD_POINTS, payload: points};
};

export const clearScore = () => {
  return {type: CLEAR_SCORE};
};
