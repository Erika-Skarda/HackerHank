/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
  // Write your code here
  let firstString = 0;
  let secondString = 0;

  let bSplit = b.split("")
  let aSplit = a.split("")

  let totalA = 0;
  let totalB = 0;

  let totalRemoved = 0

  for (let string in a) {
    if(b.includes(a[string])) {
      totalA = bSplit.find(num => num === a[string]).length;
      totalA ++
    }
  }

  for (let string in b) {
    if(a.includes(b[string])) {
      totalB = aSplit.find(num => num === b[string]).length;
      totalB ++
    }
  }

  console.log({totalA}, {totalB})

}

console.log(makeAnagram("cde", "abcc"))