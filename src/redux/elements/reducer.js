import {ADD_ELEMENT, REMOVE_ELEMENT} from './types';

const initialState = {
  elementsOnScreen: [],
  removedElements: [],
  lastAddElementDate: null,
  lastAddCoordinates: null,
};

const elements = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      return {
        ...state,
        elementsOnScreen: [
          ...state.elementsOnScreen,
          action.payload.newElement,
        ],
        lastAddElementDate: new Date.now().toString(),
        lastAddCoordinates: action.payload.newCoordinates,
      };

    case REMOVE_ELEMENT:
      let valueIndex = state.elementsOnScreen.findIndex(
        item => item.id === action.payload.id,
      );
      return {
        ...state,
        elementsOnScreen: [
          ...state.elementsOnScreen.slice(0, valueIndex),
          ...state.elementsOnScreen.slice(valueIndex + 1),
        ],
      };

    default:
      return {...state};
  }
};

export default elements;
