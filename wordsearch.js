const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function (matrix) {
  //new array that will be populated with the values of the columns and rows switched
  let newArr = [];
  //loops thorugh the rows (arrays) of the matrix
  for (let row of matrix) {
    // loops through
    for (let col = 0; col < row.length; col++) {
      if (col > newArr.length - 1) {
        //create 2D after checking newArr is empty
        newArr.push([]);
      }
      newArr[col].push(row[col]); //check
    }
  }
  return newArr;
};

module.exports = wordSearch;
