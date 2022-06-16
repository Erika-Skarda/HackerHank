function compareTriplets(a, b) {
  // Write your code here
  let sumA = 0;
  let sumB = 0;
  for(var i = 0; i < a.length; i++) {
      if(a[i] > b[i]) sumA++
  }
  
  for(var j = 0; j < b.length; j++) {
      if(a[j] < b[j]) sumB++
  }
  return [sumA, sumB]
}

console.log(compareTriplets([5,6,7], [3,6,10]))