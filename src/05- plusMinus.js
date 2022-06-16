function plusMinus(arr) {
  // Write your code here
  let zero = 0;
  let positive = 0;
  let negative = 0;
  
  const length = arr.length;
 
  const pos = arr.filter(num => num > 0)
  positive = pos.length;

  const neg = arr.filter(num => num < 0)
  negative = neg.length;

  zero = length - negative - positive;

    const result = (positive/length).toFixed(6)
    + "\n" + (negative/length).toFixed(6)
    + "\n" + (zero/length).toFixed(6)

    console.log(result)
    return result
}

// function plusMinus(arr) {
//   // Write your code here
//   let zero = 0;
//   let positive = 0;
//   let negative = 0;
  
//   const length = arr.length;
 
//   arr.forEach(n => {
//     if(n > 0) positive ++
//     else if (n < 0) negative ++
//     else zero ++
//   })

//   console.log((positive/length).toFixed(6))
//   console.log((negative/length).toFixed(6))
//   console.log((zero/length).toFixed(6))
// }

testArr = [1, -1, 3, -3, 0, 9, 12];
(plusMinus(testArr));