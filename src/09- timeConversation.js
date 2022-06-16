/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let time = s.split(":");
  let seconds = time[2].slice(0, 2);
  let minutes = time[1];
  let hours = parseInt(time[0]);

  if(time[2].includes("PM") && hours !== 12) {

    hours += 12
    
  } else if (time[2].includes("AM") && hours !== 12 ) {
    
    hours = (hours).toString().padStart(2, '0')
  
  } else if (time[2].includes("AM") && hours === 12) {

    hours = "00"

  } else if (time[2].includes("PM") && hours === 12) {
    
    seconds = time[2].slice(0, 2);
  }

  console.log(hours + ":" + minutes + ":" + seconds)
  console.log(hours, minutes, seconds)
  
}

let time = "07:05:45PM";
timeConversion(time);