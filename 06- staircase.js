function staircase(n) {
  // Write your code here
  // for (var i = 1; i <= n ; i++) {
  //   console.log((" ".repeat(n - 1) + "#".repeat(i)))
  // }

  let array = Array(n - 1).fill(' ');
  console.log(array)
  for (let i = n - 1; i >= 0; i--) {
    array[i] = '#'
    console.log(array.join(''))
  }
}

staircase(6)