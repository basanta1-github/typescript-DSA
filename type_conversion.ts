export {};
// ======================================
//1
// ======================================

const age = "23";

const nextYearAge = Number(age) + 1;

console.log(nextYearAge); // output is 24 becasue we converted the string "23" to a number using the Number() function.
console.log(typeof nextYearAge); // output is "number" because we converted the string "23" to a number using the Number() function.

// ======================================
//2
// ======================================

const a = "10";
const b = "20";

const result = a + b;

console.log(result); // 1020 because string + string = string concatenation
console.log(typeof result); // string because its string concatenation

// ======================================
//3
// ======================================

const orderId = 500;

const message = "Order #" + String(orderId);

console.log(message); // Order #500 because we converted the number 500 to a string using the String() function.
console.log(typeof message); // string becasuse the whole message is string now after converting the number 500 to a string using the String() function.

// ======================================
//4
// ======================================

console.log(Boolean(0)); // false becasue 0 is falsy value
console.log(Boolean(1)); // true becasue 1 is truthy value
console.log(Boolean("")); // false because empty string is falsy value
console.log(Boolean("Hello")); // true becasue non-empty string is truthy value

// ======================================
//5
// ======================================

// find the problem

const itemPrice = "50";
const quantity = "3";

// const total = itemPrice * quantity;
const total = Number(itemPrice) * Number(quantity); // the problem was we cannot multiply two strings, so we need to convert them to numbers first.

console.log(total);

// ======================================
//6
// ======================================

// A user sends this data:

// const userAge = "21";
// const hasLicense = "true";

// Convert them correctly:

// Expected:

// age → number
// hasLicense → boolean

// Then print:

// User can drive: true

const userAge = "21";
const hasLicense = "true";

const age1 = Number(userAge);
const hasLicense1 = Boolean(hasLicense);
console.log("User age: " + age1); // output is 21 because we converted the string "21" to a number using the Number() function.
console.log("User can drive: " + hasLicense1); // because we converted the string "true" to a boolean using the Boolean() function. Any non-empty string is considered truthy in JavaScript, so it will return true.

// ======================================
//7
// ======================================
// what happens

const value: string = "100";

const result1: any = Number(value) + Boolean(value);

// gives error cause number and boolean cannot be added together. So we need to convert boolean to number first. only in typescript buut in js it can do
console.log(result1);
101;
console.log(typeof result1); // number

//====================================
const number = "50";

const result2 = Number(number) + 20;

console.log(result2);
console.log(typeof result2);

//===============================

console.log(Boolean("0"));
console.log(Boolean(0));

//=======================

const aa = true;
const bb = false;

console.log(Number(aa) + Number(bb));

//========================

const x = "5";

console.log(x + 2);
console.log(Number(x) + 2);

//================================

// fix this What should the code be if you want the output to actually be false?
const isAdmin = "false";

const result3 = Boolean(isAdmin);

console.log(result3);

// 1 70 and number 2 true and false 3. a = 1 b =0 so 1 + 0 = 1 4. 52 and 7 5. for now the output is true and if i want false code would be

// result3 = isAdmin === "true"
