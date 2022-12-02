/*
A simple Javascript function that searches for duplicate 
integers in an array and removes duplicates. It doesn't matter
if the order of the array is changed.
*/



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

