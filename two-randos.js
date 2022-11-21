/* A program designed to find THE FIRST 2 numbers in an array that equal k
it will them terminate, before finding the reverse of the equation.

It returns this:
num 789 & compNums[n]; 829 = 1618

Not this:
num 789 & compNums[n]; 829 = 1618
num 829 & compNums[n]; 789 = 1618
*/

const numbers = [                                                                 // an array of random numbers
    180, 378, 314, 390, 386, 760, 707, 183,
    526, 355, 120, 743, 709,  78, 476, 808,
    458, 599, 789, 115,  85, 343, 550, 829,
    572, 443, 299, 585, 463, 357, 701, 480,
    671, 951, 104, 462, 424, 934, 364, 969,
    332, 792
  ];

const k = 1618;                                                                 // Sum of 2 random numbers from the array above
const compNums = numbers;                                                       // A variable acting as a copy of the array.
let breakCheck = false;                                                         // Boolean variable to stop the loop.

numbers.forEach((num) => {                                                      // Looping through numbers array.
    let numsTotes = 0;                                                          // A variable containing an interger.
    let n = 0;                                                                  // A variable set to zero to act as a counter in a while loop.
    while (n<numbers.length){                                                   // A while loop that compares each value in the array and it's copy.
        numsTotes = num + compNums[n];                                          // Sums the array and the copy of the array values.
        if(numsTotes === k && breakCheck === false){                            // Compares sum of the array vales and the search for total and if a break is needed.
            console.log(`num ${num} + compNums[n]; ${compNums[n]} = k or${k}`); // Outputs total of numbers that equal K
            breakCheck = true;                                                  // Changes the value of breakCheck to true. To break the outside loop. 
            break;                                                              // Ends while loop.
            } else {
        n++;                                                                    // If the values aren't true continue incrementing n by 1.
        }
        if(breakCheck === true){                                                // Check if breakCheck is true 
            break;                                                              // and prevents further evaluation of the array.
        }
    }
});

