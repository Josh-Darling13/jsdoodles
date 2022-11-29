/*
A function that returns a first
repeating character in a string
if there is no such character
return null.

I have 2 solutions for this problem.

1. What I think would be the typical 
solution using Javascript's builtin 
functions.

2. Using while loops.
*/

// const testStr = "flamdo";   
const testStr = "quick brown fox jumped over the lazy dog i";

/*
SOLUTION #1
*/

const pairTesterStrFunc = (strTest) => {                                // this function finds repeat letters using Javascript's array methods

    const spaceLess = strTest.replaceAll(' ', '');                      // removes the white space from the function
    const orgArray = spaceLess.split('');                               // makes each char in str an array value
    const arrayLenght = orgArray.length;                                // Finds the Length of the array.
    let copyArray = [...orgArray];                                      // Copt of the original array for comparison
    let charFinder = 0;                                                 // counts the time the char was NOT found.

    for (const elem of orgArray){                                       // creates a loop of the original array
        let searchChar = copyArray.shift();                             // removes the first element of the array and makes it into a search value.
        const foundChar = copyArray.indexOf(searchChar);                // searched for the element that is now missing from the copy array
        if(foundChar === -1){                                           // without a match the value is -1 so do this:
            charFinder++;                                               // increment charFinder, this is handy later...
        } else {                                                        // likewise a match has been found so do this:
            console.log(`The 1st repeating charter is ${searchChar}`);  // log the character and...
            return searchChar;                                          // return it.
        }
    }

    if (charFinder === arrayLenght){                                    // if charFinder is equal the length of the array no matches were found so:
        return null;                                                    // set the value of the function to null.
    }
};

pairTesterStrFunc(testStr);
console.log(pairTesterStrFunc(testStr));


/*
SOLUTION #2
*/

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
