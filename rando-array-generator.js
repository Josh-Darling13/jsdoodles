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

/**
 * every thing below is to generate an array
 * with a random sized array with random
 * duplicate numbers in it, for the purpose
 * of a practice question.
 */

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