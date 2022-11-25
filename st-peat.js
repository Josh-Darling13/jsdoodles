/*
a fucntion that returns a first
repeating character in a string
if there is no such character
return null.
*/

const testStr = "The quick brown fox jumped over the lazy dog";    // test string with repeating letters
// const testStr = "flamdo";                                      // test string no repeating letters
let matchFound = false;

// This has to be done with while while loops 
// OR as a second solution split and remove 
// search functions.

const pairTesterStrFunc = (strTest) => {
    const orgArray = strTest.split('');
    orgArray.forEach(element => {
        console.log(element);
    });
}

// pairTesterWhlFunc(strTest){
//     const orgArray = strTest.split('');                                 // Make the string into an array.
//     const copyArray = orgArray;                                         // Copy the original array.
//     const arrayLenght = orgArray.length;                                // Finds the Length of the array.
//     let countOrgArray = 0;                                              // Counter variable set to 0 for the original array.
//     let countCopyArray = 0;                                             // Counter variable set to 0 for the original array.
//     let loopBreak = false;                                               // variable for breaking out of loops

//     while(){
//         while(){}       //if the elements are the same but the array keys are different return the letter set loopStop to true
//                         // else if both counters are equal to the length of the array and return null
//     }

//     if (loopBreak === true){
//         break;
//     }
// }

// pairTesterWhlFunc(testStr);
pairTesterStrFunc(testStr);                                             // using split and slice methods

