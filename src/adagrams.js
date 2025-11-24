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
  const LETTER_SCORES = {
    A: 1, E: 1, I: 1, O: 1, U: 1,
    L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5, J: 8, X: 8, Q: 10, Z: 10
  };
  let score = 0;
  const wordUpper = word.toUpperCase();
  for (let letter of wordUpper) {
    score += LETTER_SCORES[letter];
  } if (word.length >= 7) {
    score += 8;
  } return score;
};

const getMaxScore = (words) => {
  let scores = [];
  for (let word of words) {
    scores.push(scoreWord(word));
  } return Math.max(...scores);
};

const getTiedWords = (words) => {
  let highScore = getMaxScore(words);
  let tiedWords = [];
  for (let word of words) {
    if (scoreWord(word) === highScore) {
      tiedWords.push({'score': highScore, 'word': word});
    }
  } return tiedWords;
};

export const highestScoreFrom = (words) => {
  const tiedWords = getTiedWords(words);
  if (tiedWords.length === 1) {
    return tiedWords[0];
  } let shortestWord = tiedWords[0];
  for (let i = 0; i < tiedWords.length; i ++) {
    if (tiedWords[i].word.length === 10) {
      return tiedWords[i];
    } if (tiedWords[i].word.length < shortestWord.word.length) {
      shortestWord = tiedWords[i];
    }
  } return shortestWord;
};
