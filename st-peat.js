/*
a fucntion that returns a first
repeating character in a string
if there is no such character
return null.
*/

const testStr = "The quick brown fox jumped over the lazy dog.";    // test string with repeating letters
// const moTestStr = "flamdo";                                      // test string no repeating letters

const pairTester = (strTest) => {
    const orgArray = strTest.split('');
    orgArray.forEach(element => {
        console.log(element);
    });
}

pairTester(testStr);


