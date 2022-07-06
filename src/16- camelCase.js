function camelcase(s) {
  // Write your code here
  let count = 1;
  for(let i = 0; i < s.length; i++) {
    if(s[i].toUpperCase() === s[i]){
      count += 1
    }
  }
  return count
}

console.log(camelcase("saveChangesInTheEditor"))