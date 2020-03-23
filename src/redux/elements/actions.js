import {ADD_ELEMENT, REMOVE_ELEMENT} from './types';

export const addElement = ({newCoordinates, newElement}) => {
  return {type: ADD_ELEMENT, payload: {newCoordinates, newElement}};
};
export const removeElement = ({newCoordinates, newElement}) => {
  return {type: REMOVE_ELEMENT, payload: {newCoordinates, newElement}};
};
