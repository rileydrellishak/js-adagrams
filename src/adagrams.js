// import { random } from 'core-js/core/number';

const LETTERS = {
  A: {freq: 9, value: 1}, B: {freq: 2, value: 3}, C: {freq: 2, value: 3},
  D: {freq: 4, value: 2}, E: {freq: 12, value: 1}, F: {freq: 2, value: 4},
  G: {freq: 3, value: 2}, H: {freq: 2, value: 4}, I: {freq: 9, value: 1},
  J: {freq: 1, value: 8}, K: {freq: 1, value: 5}, L: {freq: 4, value: 1},
  M: {freq: 2, value: 3}, N: {freq: 6, value: 1}, O: {freq: 8, value: 1},
  P: {freq: 2, value: 3}, Q: {freq: 1, value: 10}, R: {freq: 6, value: 1},
  S: {freq: 4, value: 1}, T: {freq: 6, value: 1}, U: {freq: 4, value: 1},
  V: {freq: 2, value: 4}, W: {freq: 2, value: 4}, X: {freq: 1, value: 8},
  Y: {freq: 2, value: 4}, Z: {freq: 1, value: 10}
};

const buildLetterPool = () => {
  const letterPool = [];
  for (const letter of Object.keys(LETTERS)) {
    for (let i = 0; i < LETTERS[letter].freq; i ++) {
      letterPool.push(letter);
    }
  } return letterPool;
};

const freqCheck = (tile, hand) => {
  const countOfLetterInHand = hand.filter((letter) => letter === tile);
  if (countOfLetterInHand.length < LETTERS[tile].freq) {
    return true;
  } return false;
};

export const drawLetters = () => {
  const letterPool = buildLetterPool();
  const maxRandomIndex = (letterPool.length);
  const hand = [];
  while (hand.length < 10) {
    let randomIndex = Math.floor(Math.random() * maxRandomIndex);
    let tile = letterPool[randomIndex];
    if (freqCheck(tile, hand)) {
      hand.push(tile);
    }
  } return hand;
}

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
