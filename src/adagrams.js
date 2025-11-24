const buildLetterPool = () => {
  const LETTER_FREQUENCIES = {
    A: 9, B: 2, C: 2, D: 4,
    E: 12, F: 2, G: 3, H: 2,
    I: 9, J: 1, K: 1, L: 4,
    M: 2, N: 6, O: 8, P: 2,
    Q: 1, R: 6, S: 4, T: 6,
    U: 4, V: 2, W: 2, X: 1,
    Y: 2, Z: 1
  };
  const letterPool = [];
  for (const letter of Object.keys(LETTER_FREQUENCIES)) {
    for (let i = 0; i < LETTER_FREQUENCIES[letter]; i ++) {
      letterPool.push(letter);
    }
  } return letterPool;
};

const freqCheck = (tile, hand) => {
  const LETTER_FREQUENCIES = {
    A: 9, B: 2, C: 2, D: 4,
    E: 12, F: 2, G: 3, H: 2,
    I: 9, J: 1, K: 1, L: 4,
    M: 2, N: 6, O: 8, P: 2,
    Q: 1, R: 6, S: 4, T: 6,
    U: 4, V: 2, W: 2, X: 1,
    Y: 2, Z: 1
  };
  const countOfLetterInHand = hand.filter((letter) => letter === tile);
  if (countOfLetterInHand.length < LETTER_FREQUENCIES[tile]) {
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
};

const createFreqMap = (item) => {
  const freqMap = {};
  for (let i of item) {
    if (Object.hasOwn(freqMap, i)) {
      freqMap[i] += 1;
    } else {
      freqMap[i] = 1;
    }
  } return freqMap;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const wordFreqMap = createFreqMap(input);
  const handFreqMap = createFreqMap(lettersInHand);
  for (const letter of Object.keys(wordFreqMap)) {
    if (isNaN(handFreqMap[letter]) || wordFreqMap[letter] > handFreqMap[letter]) {
      return false;
    }
  } return true;
};

export const scoreWord = (word) => {
  if (word.trim() === '') {
    return 0;
  }
  const wordUpper = word.toUpperCase();
  let score = 0;
  for (let char of wordUpper) {
    score += LETTER_FREQUENCIES[char].value;
  } if (wordUpper.length >= 7) {
    score += 8;
  } return score;
};

const createScoreBoard = (words) => {
  let scoreBoard = [];
  for (let word of words) {
    scoreBoard.push([word, scoreWord(word)]);
  } return scoreBoard;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
