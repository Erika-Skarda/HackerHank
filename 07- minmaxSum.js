// // function miniMaxSum(arr) {
//   // Write your code here
//   let sumMax = 0;
//   let sumMin = 0;

//   const max = arr.reduce(function(prev, current) {
//     return(prev > current ? prev : current)
//   })

//   const min = arr.reduce(function(prev, current) {
//     return (prev < current ? prev : current)
//   })

//   for (let i = 0; i < arr.length; i++) {
//     sumMax += arr[i];
//     sumMin += arr[i]
//   }

//   sumMax = sumMax - min;
//   sumMin = sumMin - max;

//   console.log(sumMax, sumMin)
// }

function miniMaxSum(arr) {
  let sumTotal = arr.reduce((a, b) => {
    return a + b
  })

  console.log(...arr)
  const min = sumTotal - Math.max(...arr)
  const max = sumTotal + Math.min(...arr)

  console.log(min + " " + max)
}
miniMaxSum([1, 3, 5, 7, 9])