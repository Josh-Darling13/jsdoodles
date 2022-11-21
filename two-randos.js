// A program designed to find to numbers in an array that equal k

let numbers = [
    180, 378, 314, 390, 386, 760, 707, 183,
    526, 355, 120, 743, 709,  78, 476, 808,
    458, 599, 789, 115,  85, 343, 550, 829,
    572, 443, 299, 585, 463, 357, 701, 480,
    671, 951, 104, 462, 424, 934, 364, 969,
    332, 792
  ];

const k = 1618;
const compNums = numbers;

numbers.forEach((num) => {
    let numsTotes = 0;
    let n = 0;
    while (n<numbers.length){
        numsTotes = num + compNums[n];
        // console.log(numsTotes);
        if(numsTotes ===k){
            console.log(`num ${num} & compNums[n]; ${compNums[n]} = ${k}`);
            break;
           }
        n++;
    }
});

