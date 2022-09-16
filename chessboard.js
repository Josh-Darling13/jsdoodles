/**
 * A simple JavaScript program to output 
 * a "checkerbaord" to the console. 
 */


const outString = "▢";
const hashTag = "#";
let finalString = "";
let n = 1;
let l = 0;
let goHere = true;
let lineIs = goHere ? outString : hashTag;

while (n < 9){
  if (n %2) {goHere = true;}
  else {goHere = false;}
  if (l %2) {lineIs = goHere ? outString : hashTag;}
  else {lineIs = goHere ? hashTag : outString;}
  finalString += lineIs;
  n++;
  if (n === 8){
    n = 1;
    l++;
    finalString += "\n";
    console.log(finalString);
  }
  if (l === 8){break;}
};

