"use strict";
//destructuring
//01. array destructure
const numbers = [12, 45, 23, 56, 48, 45, 54];
//const myNum = numbers[2];
// const muNum =numbers.at(-3);
//console.log(myNum);

// const [num1, num2, num3, num4, num5, num6, num7] = numbers;
// console.log(num1, num2, num3, num4, num5, num6, num7);
// //consol.log(a,b,c,d,e,f,g);

// const friends = ["rahat", "fahim", "mira", "nirob"];
// const [frnd1, frnd2, , frnd4] = friends;
// console.log(friends);
// console.log(frnd1, frnd2, frnd4);
// console.log(frnd2);

// let a = 1;
// let b = 2;
// let c;
// console.log(a, b);

// c = a; //1
// a = b; //2
// b = c; //1

// [a, b] = [b, a];
// console.log(a, b);

// //nested array destruction
// const myArr = [1, 2, 3, [4, 5]];
// const [, x, , [, y]] = myArr;
// console.log(x, y);

// const tools = ["js", "ts", ["react", ["next", "gatsby", ["remix"]]]];
// const [js, , [react, [next, , [remix]]]] = tools;
// console.log(js, react, next, remix);

//object destructing
// const animal = {
//   petname: "Cat",
//   age: 2,
//   foods: ["milk", "fish"],
//   variant: "white",
//   enemies: {
//     enm1: "Dog",
//     enm2: "Mouse",
//   },
// };
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

// // console.log(animalName, age, food1, food2);

// const {
//   age: petAge,
//   petname: animalName,
//   variant = "black",
//   foods: [food1, food2],
//   enemies: { enm1, enm2 },
// } = animal;
// console.log(petAge, animalName, variant);
// console.log(animalName, food1, food2, variant);

//spead operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const object1 = {
//   nameP: "Mim",
//   age: 20,
// };
// const object2 = object1;
// console.log(object2);
// const object2 = { ...object1 };
// object2.nameP = "Rita";
// console.log(object2);

//rest patter
// const evenNumber = [10, 20, 30, 40];
// const [even1, even2, ...others] = evenNumber; // rest element must at last
// console.log(even1, even2, others);

const evenNumber = [10, 20, 30, 12, 24, 36, 40];
const [even1, even2, , , ...others] = evenNumber; // rest element must at last
// console.log(even1, even2, others);

const student = {
  stName: "Sarah",
  age: 20,
  roll: 100,
};
const { age, ...rest } = student;
// console.log(rest);
// rest parameter is call param, array = arr, object = obj, string = str, boolean = bln,
// rest param
//...agr --> spread --> unpack
//...param --> rest --> pack
// function sum(a, b) {
//   return a + b;
// }
// const arrTest = [5, 7];
// console.log(sum(...arrTest));
// console.log(sum(...arrTest, 8, 9, 5));

// function sum(a, b, ...args) {
//   console.log(args);
//   return a + b;
// }
// const arrTest = [5, 7];
// console.log(sum(...arrTest));
// console.log(sum(...arrTest, 8, 9, 5, 12, 45));

// function sum(...args) {
//   console.log(args);
//   // return a + b;
// }
// const arrTest = [5, 7];
// console.log(sum(...arrTest, 8, 9, 5, 12, 45));

// const doMath = (x, y, ...args) => {
//   const result = x - y;
//   let sum = 0;

//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }

//   return {
//     subtract: result,
//     sum: sum,
//   };
// };

// console.log(doMath(10, 5, 5, 4, 7, 8, 5));
const doMath2 = (a, b, ...args) => {
  //calc sum
  const sum = a + b;
  //calc subtract
  const subtract = a - b;
  //calc product
  let product = 1;

  for (let i = 1; i < args.length; i++) {
    product *= args[i];
  }
  return {
    sum,
    subtract,
    product,
  };
};

console.log(doMath2(10, 15, 2, 45, 8, 7));


// Short circuiting
const isWinter = true

// const product = isWinter?'Buy hoodie':'Buy t-shirt'
const product = isWinter &&'Buy hoodie'

// console.log(product);
// const number = 10;
 
// number > 10 && console.log("10");
// console.log(number || "0"); 
// const number =1;
// const newNumber = number || 10;

// const number =100;
// const newNumber = number || 100;
// console.log(newNumber);

// const number =0;
// const newNumber = number || 100;
// console.log(newNumber);

// const number =0;
// const newNumber = number ?? 100;  // ?? nullish coalsing operator (NCO)

// console.log(newNumber);



// for of loop
const oddNumbers = [11,13,15,17,19]

// for(let i=0; i<oddNumbers.length; i++){
//   consolel.log(oddNumbers[i])
// };

for(const num of oddNumbers){
  console.log(num);
}
  
const friends = ["Tahia", "Kaushik", "Shamim"]
  for(const frnd of friends){
    console.log(frnd);
  }


// optional chaining
const subject = {
  total : 5,
  best: 'physics',
  wellPerform:{
    markWise: 'Chemistry',
    skillsWise: 'Math',
    creativity: {
      indoor:'Karate',
      outdoor:'Swimming',
  },
},
};

console.log(subject.wellPerform?.creativity?.outdoor?.marks?.grade); // ? optional chain
