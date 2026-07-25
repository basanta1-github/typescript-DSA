export {}; //"Treat this file as its own private island."

const age: number = 23;
const fullName: string = "Basanta Pokhrel";
const isStudent: boolean = true;
const excitement: undefined = undefined;
const nothing: null = null;
const noOfOffDays: string = "2";

//=====================
//Arrays
// stores multiple values of the same type in a single variable.
//=====================
const numbers: Array<number> = [1, 2, 3, 4, 5];
const offDays: Array<string> = ["Saturday", "Sunday"];
const offDayss: string[] = ["Saturday", "Sunday"];

//=====================
//Objects
// stores related information in form of key value pairs.
//=====================

/*
TypeScript blocks user.name in VS Code because your generic : Object label says custom properties are forbidden.
JavaScript prints user in the terminal because it ignores your labels and reads the real data box in memory
.The fix is removing : Object completely so TypeScript automatically creates a specific label that allows .name. 
*/

const user: Object = {
  name: "Basanta Pokhrel",
  age: 23,
};

// or
const user1: { name: string; age: number } = {
  name: "Basanta Pokhrel",
  age: 23,
};

// js version
const user2 = {
  name: "Basanta Pokhrel",
  age: 23,
};

console.log(user);
console.log(user1);
console.log(user1.name);
console.log(user2.name);

//=====================
// 1
//=====================
const studentName: string = "Basanta Pokhrel";
const studentAge: number = 23;
const isGraduated: boolean = true;
const GPA: number = 4.0;
const Country: string = "Canada";

console.log(`
Name: ${studentName}
Age: ${studentAge}
Graduated: ${isGraduated}
GPA: ${GPA}
Country: ${Country}`);

//=====================
// 2
//=====================

const a = 5;
const b = "5";

console.log(a + a);
console.log(b + b);

// Write the answer as a comment.
// a + a = 10 , b + b = 55

//=====================
// 3
//=====================

const productName: string = "Laptop";
const productPrice: number = 1200;
const productQuantity: number = 3;
const inStock: boolean = true;

const totalPrice: number = productPrice * productQuantity;

console.log(
  `
    Product Name: ${productName}
    Product Price: $${productPrice}
    Product Quantity: ${productQuantity}
    In Stock: ${inStock}
    Total Price: $${totalPrice}
    `,
);

//=====================
// 4

// Create a variable:
// let loggedInUser = null;
// Then imagine user logs in:
// loggedInUser = "Basanta";
// Print both states.
//=====================

let loggedInUser: string | null = null;
console.log(`Logged in user: ${loggedInUser}`);

loggedInUser = "Basanta";
console.log(`Logged in user: ${loggedInUser}`);

//=====================
// 5
//=====================

const programmingLanguages: Array<string> = [
  "JavaScript",
  "TypeScript",
  "Python",
];

console.log(`
    My first language is ${programmingLanguages[0]}.
    My second language is ${programmingLanguages[1]}.
    My third language is ${programmingLanguages[2]}.
`);

// What will this print?

const age1: number = 23;

console.log(typeof age1);
// number

// And this?

const studentName1 = "Basanta";

console.log(typeof studentName1);
// string

// And this?

const isGraduated1 = true;

console.log(typeof isGraduated1);
// boolean
