function birthdayCakeCandles(candles) {
  // Write your code here

  const max = candles.reduce(function(prev, current) {
    return (prev > current) ? prev : current;
  })

  // const masArray = Math.max(...candles)
  // console.log(masArray)
  console.log(candles.filter(total => total === max).length)
}

birthdayCakeCandles([4, 4, 1, 3])