function repeatedString(s, n) {
  // Write your code here
  const length = s.length

  //As em uma só string
  let result = (s.split("a").length - 1);


  //Quantas strings entram
  let max = Math.floor(n /length);

  let total = result * max
  
  total += (s.slice(0, n % length).split("a").length - 1)
 
  return total;
}

repeatedString('abcac', 10)