"use strict"
/*
// Swapping using temporary variable

let firstValue = Number(prompt('Enter First value'));
let secondValue = Number(prompt('Enter Second  value'));
let temp;//Take one temporary variable
console.log(`Temp is empty container(variable):  ${typeof temp}`);

console.log(`First value before swapping:   ${firstValue}`);
console.log(`Second value before swapping:  ${secondValue}`);
temp = firstValue; //assume here value is in  water form
firstValue = secondValue; // right hand side operand get empty after assign to variable
secondValue= temp;
console.log(`The values after swapping`);

console.log(`First value After swapping:   ${firstValue}`);
console.log(`Second value After swapping:   ${secondValue}`);
*/

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'
// }

/*
// destructuring assignment
let { name:firstName='pandurang', age, gender } = person;
//we can also assign by default value to variable

// console.log(person.name); // Sara
// console.log(person.age); // 25
// console.log(person.gender); // female
console.log(firstName);
console.log(age);
console.log(gender);

*/

/* Array destructuring
const fullName =['pandurang','vasudev','sadgir'];
// console.log(`My full name is ${fullName[0]} ${fullName[1]} ${fullName[2]}`);
let [firstName,middleName,lastName] = fullName;

console.log(`My full name is ${firstName } ${middleName} ${lastName}`);
*/

// Swapping using  destructuring assignment
/*
let firstValue = prompt('Enter the first value');
let secondValue = prompt('Enter the second value');
console.log(`Fist value before swapping ${firstValue}`);
console.log(`Second value before swapping  ${secondValue}`);
let [first,second] = [secondValue,firstValue ];
console.log(`Fist value after swapping ${first}`);
console.log(`Second value after swapping  ${second}`);

*/

/* destructuring assignment in  nested object
const person = {
    name: 'Jack',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}
// nested destructuring
const {name, hobbies: {read, playGame}} = person;

console.log(name); // Jack
console.log(read); // true
console.log(playGame); // true
*/