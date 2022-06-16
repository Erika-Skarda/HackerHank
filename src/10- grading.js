function gradingStudents(grades) {
  // Write your code here
  const array = []
  grades.forEach((num) => { 
    const roundNumber = Math.ceil(num/5)*5
    const diff = roundNumber - num
    if(diff < 3 && roundNumber > 33 && num !== 33) array.push(roundNumber)
    else if(diff >= 3 && num > 33) array.push(num)
    else if(num === 33) array.push(num)
  })
 return array
}

console.log(gradingStudents([73, 67, 38, 33]))