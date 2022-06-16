/* 
  Diagonal Difference Solution.
  sample matrix = [[1,2,3], [4,5,6], [7,8,9]]
*/

function diagonalDifference(matrix) {
  const length = matrix.length;

  let diagonal1 = 0;
  let diagonal2 = 0;

  // Looping through the array and summing the diagonals.
  for(var i = 0; i < length; i++) {
     // Calculating the primary diagonal.
     diagonal1 += matrix[i][i]

    // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += matrix[length - 1 - i][i]
   
  }
  return Math.abs(diagonal1 - diagonal2)
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [7,8,9]]))