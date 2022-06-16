/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  let socks = {}
  let pairs = 0


//  for(let element of ar) {

//   socks[element] = socks[element] + 1 || 1;

//   if(socks[element] % 2 === 0) {
//     pairs += 1
//   }
//  }

for (let i = 0; i < ar.length; i ++) {
  socks[ar[i]] ? socks[ar[i]] ++ : socks[ar[i]] = 1
}

for (let sock in socks) {
  pairs += Math.floor(socks[sock] / 2)
}

 return pairs
}
console.log(sockMerchant(7, [1,2,1,2,1,3,2]))