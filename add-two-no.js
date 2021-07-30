"use strict"
/*
const no1 = 10;
const no2 = 20;
// no1=50; const is immutable
let addition= no1+no2;
console.log(addition);
console.log(typeof addition);

*/

//Now get input from user
const no1 = prompt('Enter the first number');
const no2 = prompt('Enter the second  number');

// let result = Number(no1)+Number(no2);
// let result=parseInt(no1)+parseInt(no2);
let result=parseFloat(no1)+parseFloat(no2);
console.log(`The sum of ${no1} and ${no2} is ${result}`);
console.log(typeof result);
