const firstName = "Basanta Pokhrel";
const age = 23;
const country = "Canada";
const profession = "Software Engineer";
const yearsOfExperience = 2;

console.log(
  `My name is ${firstName}. I am ${age} years old. I live in ${country}. I work as a ${profession} with ${yearsOfExperience} years of experience.`,
);

// =====================================
//2
let balance = 5000;
balance += 1500;
balance -= 800;
balance += 2500;
balance -= 1200;

console.log(`My current balance is ${balance}.`);

// =====================================
//3

const celsius = 25;

const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C is equal to ${fahrenheit}°F.`);

// =====================================
//4
const item1Price = 25;
const item2Price = 40;
const item3Price = 15;
const tax = 0.13;

const subtotal = item1Price + item2Price + item3Price;
const taxAmount = subtotal * tax;
const finalPrice = subtotal + taxAmount;

//The toFixed(2) method formatting rounds a number to exactly two decimal places and returns it as a string.

console.log(`subtotal: $${subtotal}
    taxAmount: $${taxAmount}
    finalPrice: $${finalPrice}`);

// =====================================
//5
let a = 10;
let b = 20;

let temp = a;

a = b;
b = temp;

console.log(`After swapping: a = ${a}, b = ${b}`);

// =====================================
//bonus
let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);

//output is x = 20 and y = 10

// =====================================
//6

const movieName = "Avengers: Endgame";
const ticketPrice = 45;
const numberOfTickets = 3;
const discountPercentage = 0.1;

const totalPriceBeforeDiscount = ticketPrice * numberOfTickets;

const discountAmount = totalPriceBeforeDiscount * discountPercentage;

const finalPriceAfterDiscount = totalPriceBeforeDiscount - discountAmount;
console.log(`
Movie: ${movieName}
Tickets: ${numberOfTickets}
Before Discount: $${totalPriceBeforeDiscount.toFixed(2)}
Discount: $${discountAmount.toFixed(2)}
Final Price: $${finalPriceAfterDiscount.toFixed(2)}
`);
