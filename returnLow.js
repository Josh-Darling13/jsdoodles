/* 
a simple function that returns the lost of 
2 given parameters. 
*/

const n1 = 77773543456;
const n2 = 986245;

const getLow = function(n1, n2){
    if (n1<n2){
        return n1;
    } else {
        return n2;
    }
};

const lowIs = getLow(n1, n2);
console.log(lowIs);