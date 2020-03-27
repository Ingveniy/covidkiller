import {ADD_ELEMENT, REMOVE_ELEMENT} from './types';

const initialState = {
  elementsOnScreen: [
    {id: 1, type: 'good', x: '10%', y: '10%', liveTime: 1000, score: 10},
    {id: 2, type: 'bad', x: '90%', y: '90%', liveTime: 2000, score: -10},
  ],
  lastAddCoordinates: {x: 10, y: 10},
};

const elements = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      console.log(action, 'action');

      return {
        ...state,
        elementsOnScreen: [
          ...state.elementsOnScreen,
          action.payload.newElement,
        ],
        lastAddCoordinates: action.payload.newCoordinates,
      };

    case REMOVE_ELEMENT:
      let valueIndex = state.elementsOnScreen.findIndex(
        item => item.id === action.payload,
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
