/**
 * Got this javascript challenge 
 * from a book
 * So out putput all numbers between 1 - 100
 * if the number is is divisable 
 * by 3 out to the console "fizz"
 * by 5 then output "buzz"
 * by both number then "fizzbuzz"
 */

 let n = 1;
 let fizz = "fizz";
 let buzz = "buzz";
 
 while (n < 100){  
     if (n %3 !==0 && n %5 !==0){
       console.log(n);
     }else if (n %3 ===0 && n %5 ===0) {
       console.log(fizz + buzz);
     }else if (n %3 ===0){
       console.log(fizz);
     }else if (n %5 ===0){
       console.log(buzz);
     }
     n++;
     if (n ===100)
       {break;}
 };