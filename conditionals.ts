export {};

// ==================
//1
//===================

const age = 23;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

//==================
//2
//===================
const balance = 750;

if (balance >= 1000) {
  console.log("You can buy the laptop.");
} else {
  console.log("You need to save more money.");
}

//==================
//3
//===================
const loggedIn = true;

if (loggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in to access your account.");
}

//==================
//4
//===================
const marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else if (marks >= 60) {
  console.log("Grade: D");
} else {
  console.log("Fail");
}

//==================
//5
//===================

const myAge = 15;
if (myAge >= 18) {
  console.log("You can get ADULT ticket.");
} else {
  console.log("sorry you can only get CHILD ticket.");
}

//==================
//6
//===================

const isLoggedIn = true;
const hasSubscription = true;
const isBanned = false;

const canAccessPremium = isLoggedIn && hasSubscription && !isBanned;

if (canAccessPremium) {
  console.log("Premium Access granted. Enjoy the content!");
} else {
  console.log("premium access denied");
}
