"use strict";
//destructuring
//01. array destructure
const numbers = [12, 45, 23, 56, 48, 45, 54];
//const myNum = numbers[2];
// const muNum =numbers.at(-3);
//console.log(myNum);

const [num1, num2, num3, num4, num5, num6, num7] = numbers;
console.log(num1, num2, num3, num4, num5, num6, num7);
//consol.log(a,b,c,d,e,f,g);

const friends = ["rahat", "fahim", "mira", "nirob"];
const [frnd1, frnd2, , frnd4] = friends;
console.log(friends);
console.log(frnd1, frnd2, frnd4);
console.log(frnd2);

let a = 1;
let b = 2;
let c;
console.log(a, b);

// c = a; //1
// a = b; //2
// b = c; //1

[a, b] = [b, a];
console.log(a, b);

//nested array destruction
const myArr = [1, 2, 3, [4, 5]];
const [, x, , [, y]] = myArr;
console.log(x, y);

const tools = ["js", "ts", ["react", ["next", "gatsby", ["remix"]]]];
const [js, , [react, [next, , [remix]]]] = tools;
console.log(js, react, next, remix);

//object destructing
const animal = {
  petname: "Cat",
  age: 2,
  foods: ["milk", "milk"],
  variant: "white",
};
// const {
//   animalName,
//   age,
//   foods: [food1, food2],
// } = animal;

// const {
//   petname,
//   age,
//   foods: [food1, food2],
// } = animal;

// console.log(animalName, age, food1, food2);
// console.log(animalName, age, food1, food2);

const { age: petAge, petname: animalName, variant = "black" } = animal;
console.log(petAge, animalName, variant);
