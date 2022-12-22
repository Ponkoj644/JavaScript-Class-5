// // 1. JavaScript Ternary operator (?)
// // If eles Example
// let age = 13;
// // if (age >= 18) {
// //   console.log("You are full age.");
// // } else {
// //   console.log("You are not full age.");
// // }

// // Use of Ternary operator (has 3 part)

// age >= 18 // part 1, Condition
//   ? console.log("You are full age.") //part 2, if the condition is true.
//   : console.log("You are not full age."); // part 3 if the condition is false.

// // example 2

// let food;
// if (age > 12) {
//   food = "Chicken";
// } else {
//   food = "Ice cream";
// }
// console.log(`Like to eat ${food}`);

// // use Ternary operetor without If else.
// console.log(` He likes to eat ${age > 12 ? "Chicken" : "Ice cream"}`);

// // Another example:
// let age1 = 16;
// let drink;
// if (age1 > 15) {
//   drink = "Coffee";
// } else {
//   drink = "Milk";
// }
// console.log(` He would like to drink ${drink}`);

// // Condition short by ternary operator
// console.log(` he would like to drink ${age1 > 15 ? "Coffee" : "Milk"}`);

// // 2. JavaScript Function (define as a block of code which do the specific work. It has 2 part. (1) Where write the function, (2) Where the function initiate)

// // Example 1
// function showText() {
//   console.log("Some text");
// }
// showText();

// // Example 2 (Function name with parameter)
// function showName(name) {
//   console.log(name);
// }
// showName("Ponkoj");
// showName("Mondol");

// // Example 3
// function calculateNumber(n1, n2) {
//   console.log(n1 * n2);
// }
// calculateNumber(10, 15);
// calculateNumber(130, 150);

// // Example 4 (Average function)
function averageNumber(s1, s2, s3, s4, s5) {
  console.log((s1 + s2 + s3 + s4 + s5) / 5);
}
averageNumber(66, 70, 75, 85, 95);

// Example 5 (Real life example on Average function)
function averageMark(s1, s2, s3, s4, s5) {
  const average = (s1 + s2 + s3 + s4 + s5) / 5; // save the calculation into a variable like "average".
  return average; // Return the vatiable
}
// Student 1 average mark
const st1AverageMark = averageMark(66, 70, 75, 85, 95); // Take a new variable for a student like "st1AverageMark" and then execute the function & put the value in to function like "averageMark(66, 70, 75, 85, 95);"
console.log(st1AverageMark); // Return 78.2
// console.log(averageMark(66, 70, 75, 85, 95));

// Student 2 average mark
const st2AverageMark = averageMark(77, 85, 70, 88, 78);
console.log(st2AverageMark); // Return 79.6

// Student 3 average mark
const st3AverageMark = averageMark(55, 47, 60, 52, 57);
console.log(st3AverageMark); // Return 54.2

console.log(st1AverageMark, st2AverageMark, st3AverageMark); // Show 3 students mark: 78.2 79.6 54.2

// Example 6 (Real life: 7 days cost average)
function averageCost(d1, d2, d3, d4, d5, d6, d7) {
  const dayEverage = (d1 + d2 + d3 + d4 + d5 + d6 + d7) / 7;
  return dayEverage;
}
const dayAverageCost = averageCost(130, 250, 460, 630, 335, 270, 340);
console.log(dayAverageCost);

// Function Declaration : function > function name (calculateAge) > argument/parameter (birthYear).
function calculateAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}
const aAge = calculateAge(1984); //age of "a"
console.log(aAge);

const bAge = calculateAge(1990); //age of "b"
console.log(bAge);

const cAge = calculateAge(1971); //age of "c"
console.log(cAge);

// Function Expression : vaeriable (const) > function name (calculateAge2) = functuion(parameter){}
//Example 1

// const calculateAge2 = function (birthYear) {
//   const age2 = 2022 - birthYear;
//   return age2;
// };
// const cage2 = calculateAge2(1980); //Age of "C"
// console.log(cage2);
// const dage2 = calculateAge2(1988); //Age of "d"
// console.log(dage2);

// Exapple 2
const calculateAge2 = function (birthYear) {
  return 2022 - birthYear; // in short : Direct use return without take vaiable.
};
const cage2 = calculateAge2(1980); //Age of "C"
console.log(cage2);

/* NB : A major difference between "Function declaration" & "Function Expression" is-

Function Declaration : call the function in startup or bottom, its work.

But

Function Expression : Allways call the function in the bottom. if we call the function in stratup, it dosen't work.
*/

// Example of function declaration
someText(); //Function called
function someText() {
  console.log("Some text!");
}
someText(); //Function called

// Example of function expression
// someTest2();//Function called which doesn't work
const someTest2 = function () {
  console.log("Show some text !");
};
someTest2(); //Function called which work

// Arrow function : Almost same as "Function espression"
const calculateAge3 = (birthYear3) => 2022 - birthYear3; // variable (const) function name(calculateAge3) = (parameter) => operation(2022 - birthYear3)
const eAge = calculateAge3(1973); // Data receive into a variable (const eAge)
console.log(eAge);

// Example 2
const jobaYearLeft = (birthYear4) => {
  //variable(const) function name(jobaYearLeft) = parameter(birthYear4)
  const age = 2022 - birthYear4; // Calculate age = variable(const)  Name(age) = 2022 - parameter(birthYear4)
  const ageLeft = 62 - age; //claculate age left.
  return ageLeft; //receive the value returm
};
const rAgeLeft = jobaYearLeft(1980); // enter birth year
console.log(`Job left ${rAgeLeft} years`); //print
