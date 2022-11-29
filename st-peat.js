/*
a fucntion that returns a first
repeating character in a string
if there is no such character
return null.

I have 2 solutions for this problem.

1. What I think would be the typical 
solution using Javascript's builtin 
functions.

2. Using while loops.
*/

const testStr = "voodoo";
const testStr = "flamdo";   
// const testStr = "quick brown fox jumped over the lazy dog i";
// "quick brown fox jumped over the lazy dog i";    // test string with repeating letters
                                   // test string no repeating letters


// This has to be done with while while loops 
// OR as a second solution split and remove 
// search functions.

const pairTesterStrFunc = (strTest) => {                                
    const orgArray = strTest.split('');                                 // makes each char in str an array value
    orgArray.forEach(element => {
        console.log(element);
    });
}

pairTesterStrFunc(testStr);




const pairTesterWhlFunc = (strTest) =>{                                 // this function finds repeat letters using while loops
    const orgArray = strTest.split('');                                 // makes each char in strTest an array value
    const copyArray = orgArray;                                         // Copy the original array.
    const arrayLenght = orgArray.length;                                // Finds the Length of the array.
    let countOrgArray = 0;                                              // Counter variable set to 0 for the original array.
    let countCopyArray = 0;                                             // Counter variable set to 0 for the original array.
    let loopBreak = false;                                              // variable for breaking out of loops

    while(countOrgArray < arrayLenght){                                 // Outer while loop running through the array
        while(countCopyArray < arrayLenght){                            // nested while loop running through the array
            if (countCopyArray > countOrgArray){                        // if nested while is greater than outer loop...
                                                                        // making sure the same place in the array is not being tested
                if(orgArray[countOrgArray] === copyArray[countCopyArray]){
                                                                        // checks if the values are the same, if they are:
                                                                        // log the values and there location in the string:
                    console.log(`the first letter is ${orgArray[countOrgArray]}\n` +
                    `it's position in the word is ${countOrgArray + 1}\n` +
                    `the first letter is ${copyArray[countCopyArray]}\n` +
                    `it's position in the word is ${countCopyArray + 1}`
                    )
                    break;                                              // breaks this loop
                } 
            }

            countCopyArray++;                                           // increments variable for searching the nested loop
            if (countCopyArray === arrayLenght && countOrgArray === arrayLenght - 1){
                                                                        // if the entire array has been searched without a match found
                loopBreak = true;                                       // set to true to break the outer loop
            }
            else if (countCopyArray === arrayLenght){                   // resets counter for nested loop
                countCopyArray = 0;
                countOrgArray++;                                        // advances next array comparison position
            } 
        }

        if (loopBreak === true){                                        // if loop break is true:
            return null;                                                // return a null value
        } else {                                                        // or:
            return orgArray[countOrgArray];                             // return the letter found (if logged)
        }
    }
};

// console.log(pairTesterWhlFunc(testStr));                                //to see a null value this must be logged to console
// pairTesterStrFunc(testStr);                                             // using split and slice methods




/*
these should be run as seperate programs in dev tools to see which is faster. 
*/ 