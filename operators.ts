export {};
// ==================
//1
//===================

const firstNumber: number = 10;
const secondNumber: number = 20;

console.log(`
    Addition: ${firstNumber + secondNumber}
    Subtraction: ${firstNumber - secondNumber}
    Multiplication: ${firstNumber * secondNumber}
    Division: ${firstNumber / secondNumber}
    Modulus: ${firstNumber % secondNumber}
    Exponent: ${firstNumber ** firstNumber}`);

// ==================
//2
//===================

let savings: number = 1000;
savings += 500;
savings *= 2;
savings -= 300;
savings /= 2;

console.log(`My current savings is ${savings}.`);

// ==================
//3
//===================

const age: number = 23;

// Print the results of:

console.log(`Is age greater than 18? ${age > 18}`);
console.log(`Is age greater than or equal to 23? ${age >= 23}`);
console.log(`Is age less than 18? ${age < 18}`);
console.log(`Is age equal to 23? ${age === 23}`);
console.log(`Is age not equal to 30? ${age !== 30}`);

// ==================
//4
//===================

const isLoggedIn: boolean = true;
const hasSubscription: boolean = false;

// Print:
// isLoggedIn && hasSubscription
// isLoggedIn || hasSubscription
// !isLoggedIn
// !hasSubscription

console.log(
  `Is user logged in and has subscription? ${isLoggedIn && hasSubscription}`,
);
console.log(
  `Is user logged in or has subscription? ${isLoggedIn || hasSubscription}`,
);
console.log(`Is user not logged in? ${!isLoggedIn}`);
console.log(`Does user not have subscription? ${!hasSubscription}`);

// ==================
//5
//===================

let visitorCount: number = 10;

visitorCount++;
visitorCount++;
visitorCount--;

console.log(`Current visitor count is ${visitorCount}.`);

// ==================
//6
//===================

const score: number = 10;

console.log(score > 5 && score < 20); //true
// console.log(score === "10"); // false
console.log(score === 10); // true
console.log(!(score > 20)); // true

// ==================
//7
//===================

let points = 10;

points += 5;
points *= 2;

console.log(points); // Output: 30
// ==================
//8
//===================

const a = 10;
const b = "10";

// console.log(a == b); // true (loose equality)
// console.log(a === b); // false (strict equality)

// ==================
//9
//===================

const hasPassword = true;
const hasEmail = false;

console.log(hasPassword && hasEmail); // false
console.log(hasPassword || hasEmail); // true
console.log(!hasPassword); // false
