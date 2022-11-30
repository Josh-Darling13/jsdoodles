/*
A simple Javascript function that searches for duplicate 
integers in an array and removes duplicates.

I find this idea to be kind of ... boring.

So to make this a bit more interesting. I wrote a program 
that generates random numbers into an array of a random
length. Then randomly numbers are selected from that array 
and duplicated.

Building the first version of the first part of this program
I used a stagnant array, but I want it to work in practice on 
a dynamic structure. And I felt this would create a bit more
fun to when writing the program. 
*/

// array maker...
// makes and array filled with random numbers
const arrayThisLong = Math.floor(Math.random() * 100) + 20;

let n = 0;
let testArray = [];

while(n < arrayThisLong){
    let randoInts = Math.floor(Math.random() * 1000);
    testArray[n] = randoInts;
    n++;
}

console.log(testArray);







let orgArray = [
    150, 523, 897, 918, 974, 628, 759, 709,
     64, 829, 775, 262, 880, 168, 784, 974,
    903, 669, 741,  15, 713, 138, 625, 964,
    620, 785, 398, 926, 351, 292,  47, 472,
    194, 525, 457, 469, 918, 116,  28, 537,
    893, 609, 827
  ];