"use strict"

// if we know the base and height of triangle then formula is  Area = (base*height)/2
/*
const base = Number(prompt("Enter the base of triangle"));
const height = Number(prompt("Enter the Height of triangle"));
let areaOfTriangle = (base*height)/2;
console.log(`The area of triangle is ${areaOfTriangle}`);

*/

// If you know all the sides of a triangle, you can find the area using Herons'
//  formula. If a, b and c are the three sides of a triangle, then
//  s = (a+b+c)/2
// area = √(s(s-a)*(s-b)*(s-c))

const side1 = Number(prompt(`Enter the first side of triangle`));
const side2 = Number(prompt(`Enter the Second side of triangle`));
const side3 = Number(prompt(`Enter the Third side of triangle`));
let s =(side1+side2+side3)/2;
let areaOfTriangle = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(`The Area of triangle is ${areaOfTriangle}`);