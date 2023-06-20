const wordSearch = (letters, word) => {
  // This array stores strings where each string represents a row from the letters array joined together.
  const horizontalJoin = letters.map(ls => ls.join(''));
  // loops and checkif there's a word if yes then return true
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // stores vertical searches
  const verticalJoin = [];
  // do the loopy loops again to seatch for words per column
  for (let i = 0; i < letters[0].length; i++) {
    let verticalString = '';
    for (let j = 0; j < letters.length; j++) {
      verticalString += letters[j][i];
    }
    verticalJoin.push(verticalString);
  }
  // looped and check if the letters collecteed formed words
  // if yes then true if no then false
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  
  return false;
};

module.exports = wordSearch;

/** Pair programming by gckey and x33ra
const wordSearch = (letters, word) => {
  let result = false;

  if (letters.length < 1 || word.length < 1) {
    return false;
  }
  // join each row of the 2D array horizontallty to form an array of strings
  const horizontalJoin = letters.map(ls => ls.join(''));
  let vertical = [];
  for (let row = 0; row < letters.length; row++) {
    // to check for word in horizonta strings
    for (let column; column < letters.length; column++) {
      if (row === 0) {
        vertical.push(letters[row][column]);
      } else {
        vertical[column].push(letters[row][column]);
      }
    }
  
  }
  const verticalJoin = vertical.map(ls => ls.join(''));
  // check for worn in vertical strings
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      result = true;
      break;
    }
  }
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      result = true;
      break;
    }
  }
  return result;

};

module.exports = wordSearch; */