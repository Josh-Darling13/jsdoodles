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

// pairTesterWhlFunc(testStr);
pairTesterStrFunc(testStr);

