/*
A simple Javascript function that searches for duplicate 
integers in an array and removes duplicates. It doesn't matter
if the order of the array is changed.

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
// const arrayThisLong = Math.floor(Math.random() * 100) + 20;

// let n = 0;
// let testArray = [];

// while(n < arrayThisLong){
//     let randoInts = Math.floor(Math.random() * 1000);
//     testArray[n] = randoInts;
//     n++;
// }

// // console.log(testArray);

// const keyValues = Math.round(testArray.length/2);                       // halves the amount of potential random searching
// const keyLost = Math.floor(Math.random() * keyValues) + 3;              // randomly picks times elements will be duplicated.
// // console.log(keyLost);
// let stolenElements = [];

// let k = 0;

// while (k < keyLost){
//     let keyFound = Math.floor(Math.random() * testArray.length);
//     stolenElements[k] = testArray[keyFound];
//     k++;
// }

// console.log(`stolen elements: ${stolenElements} \n `);


// let i = 0;

// while (i < stolenElements.length){
//     let keyFound = Math.floor(Math.random() * testArray.length);
//     testArray.splice(keyFound, 0, stolenElements[i]);
//     i++;
// }

// console.log(`stolen elements in test array: ${testArray} \n `);


// Static array for building on later
let orgArray = [
    150, 666, 523, 666, 897, 918, 974, 628,  
     64, 829, 775, 262, 880, 168, 784, 974,
    903, 669, 741,  15, 713, 138, 625, 964,
    620, 785, 398, 926, 351, 292,  47, 472,
    194, 525, 457, 469, 918, 116,  28, 537,
    893, 609, 827, 709, 759, 523
  ];

const copyArray = [...orgArray];
let searchForMe = [];
let gotBackHere = [];
let copyRemoved = [];
const prepArray = orgArray.reverse();
let revArray = [...prepArray];
console.log(revArray);

for (let element in orgArray){
    let searchFor = copyArray.shift();
    let whereInArray = copyArray.indexOf(searchFor);

    if (whereInArray !== -1){
        searchForMe.push(searchFor);
        // gotBackHere.push([whereInArray,searchFor]);
    }
}

for (elm in searchForMe){
    let whereDelete = revArray.indexOf(searchForMe[elm]);
    console.log("whereDelete" + whereDelete);
    revArray.splice(whereDelete,1);
}

console.log("The Array with all duplicates removed:");
console.log(revArray)

