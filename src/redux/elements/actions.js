import {ADD_ELEMENT, REMOVE_ELEMENT} from './types';

// helper functions

const getRandomId = () => {
  return Date.now().toString();
};
const getRandomElementType = () => {
  return 0 + Math.floor((0 - 1) * Math.random()) ? 'good' : 'bad';
};

const getRandomElementCoordinates = lastAddCoordinates => {
  // Берем ширину игрового экрана
  // Берем высоту игрового экрана

  // Новый обьект должен быть удаленот краев экрана на (15px + 50% его высоты или ширины) с каждой стороны
  // Так же новый обьект должен спавнится в радиусе не менее 100px по вертикали и по горизонтали от последнего обьекта
  return {x: 10, y: 10};
};
const getRandomElementScore = (minScore, maxScore, elementType) => {
  return 10;
};
const getElementLiveTimeByDifficulty = difficulty => {
  return 1000;
};
export const addElement = ({
  lastAddCoordinates,
  minScore,
  maxScore,
  difficulty,
}) => {
  const id = getRandomId();
  const {x, y} = getRandomElementCoordinates(lastAddCoordinates);
  const elementType = getRandomElementType();
  const score = getRandomElementScore(minScore, maxScore, elementType);
  const liveTime = getElementLiveTimeByDifficulty(difficulty);

  const newElement = {
    id,
    type: elementType,
    x,
    y,
    score,
    liveTime,
  };

  return {type: ADD_ELEMENT, payload: {newElement, newCoordinates: {x, y}}};
};

export const removeElement = removedElementId => {
  return {type: REMOVE_ELEMENT, payload: removedElementId};
};
