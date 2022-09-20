/*
defining odd and even by either 
0 = even
1 = odd

all other numbers N, is the same as N - 2.

This uses a recursive function to take
a single paramenter, (a positive whole int)
and return a boolean 
*/

let n = 1234567890;

const numberWorkable = (num) => {
  let numIs = String(num);
  let endNumIs = numIs.slice(-1);
  return Number(endNumIs);
}

const testWhole = (num) => {
  let numIs = Number(num);
  if (numIs % 1 == 0){
    return numIs;
  } else {
    console.log("please enter a whole number");
  }
}

const lessThanZero = (num) => {
  if (num >= 1){
    return num;
  } else {
      console.log("please enter a whole number");
   }
} 

const numberIs = (num) => {
  let isWhole = lessThanZero(num);
  let testableNum = testWhole(isWhole);
  let numIs = numberWorkable(testableNum);

  if(numIs > 1){
    while (numIs > 1){
      numIs = numIs - 2;
    }
  }

  if (numIs === 0){
    return true;
  } else if (numIs === 1){
    return false;
  } 
}

console.log(numberIs(n));