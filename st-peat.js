/*
a fucntion that returns a first
repeating character in a string
if there is no such character
return null.
*/

const testStr = "voodoo";
// "quick brown fox jumped over the lazy dog i";    // test string with repeating letters
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

const pairTesterWhlFunc = (strTest) =>{
    const orgArray = strTest.split('');                                 // Make the string into an array.
    const copyArray = orgArray;                                         // Copy the original array.
    const arrayLenght = orgArray.length;                                // Finds the Length of the array.
    let countOrgArray = 0;                                              // Counter variable set to 0 for the original array.
    let countCopyArray = 0;                                             // Counter variable set to 0 for the original array.
    let loopBreak = false;                                               // variable for breaking out of loops

    while(countOrgArray < arrayLenght){
                        //if the elements are the same but the array keys are different return the letter set loopStop to true
                        // else if both counters are equal to the length of the array and return null
        while(countCopyArray < arrayLenght){
            console.log(`while loop for first letter ${countOrgArray}` +
            ` while loop for second letter ${countCopyArray}`
            )

            if (countCopyArray > countOrgArray){
                if(orgArray[countOrgArray] === copyArray[countCopyArray]){
                    console.log(`the first letter is ${orgArray[countOrgArray]}\n` +
                    `it's position in the word is ${countOrgArray + 1}\n` +
                    `the first letter is ${copyArray[countCopyArray]}\n` +
                    `it's position in the word is ${countCopyArray + 1}`
                    )
                    loopBreak = true;
                    break;
                }
            }


            countCopyArray++;
            if (countCopyArray === arrayLenght && countOrgArray === arrayLenght - 1){
                console.log("made it here");
                break;
            }
            else if (countCopyArray === arrayLenght){
                countCopyArray = 0;
                countOrgArray++;
            } else if (countOrgArray === arrayLenght) {
                countOrgArray = 0;
            }
        }

        if (loopBreak === true){
            break;
        }
    }
}

pairTesterWhlFunc(testStr);
// pairTesterStrFunc(testStr);                                             // using split and slice methods

/*
these should be run as seperate programs in dev tools to see which is faster. 
*/ 