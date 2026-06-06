// qureshi assignment 

// arroe function 


// q No.1
let add = (a, b) => a + b;
console.log("Q1 Output:", add(5, 3)); 

// q No.2
let check = n => n % 2 === 0;
console.log("Q2 Output:", check(4)); 

// q No.3
let greater = (a, b) => {
   if (a > b) {
     return a;
   } else {
     return b;
   }
};
console.log("Q3 Output:", greater(5, 9));

// q No.4
let checkResult = (marks) => {
   if (marks > 40) {
     return "Pass";
   } else {
     return "Fail";
   }
};
console.log("Q4 Output (55):", checkResult(55));
console.log("Q4 Output (30):", checkResult(30));

// q No.5
let multiply = (a, b) => a * b;
console.log("Q5 Output:", multiply(4, 5)); 

// q No.6
let square = (n) => n * n;
console.log("Q6 Output:", square(5));

// q No.7
let upper = (str) => str.toUpperCase();
console.log("Q7 Output:", upper("hello"));

// q No.8
let toLower = (str) => str.toLowerCase();
console.log("Q8 Output:", toLower("HELLO"));

// q No.9
let stringLength = (str) => str.length;
console.log("Q9 Output:", stringLength("JavaScript")); 

// q No.10
let firstChar = (str) => {
   return str[0];
};
console.log("Q10 Output:", firstChar("Hello"));

// q No.11
let firstElement = (arr) => {
   return arr[0];
};
console.log("Q11 Output:", firstElement(["apple", "mango", "banana"]));

// q No.12
let lastElement = (arr) => {
   return arr[arr.length - 1];
};
console.log("Q12 Output:", lastElement(["apple", "mango", "banana"]));

// q No.13
let countElements = (arr) => {
   return arr.length;
};
console.log("Q13 Output:", countElements(["apple", "mango", "banana"]));

// q No.14
let evenNumbers = (arr) => {
   return arr.filter(num => num % 2 === 0);
};
console.log("Q14 Output:", evenNumbers([1, 2, 3, 4, 5, 6]));

// q No.15
let oddNumbers = (arr) => {
   return arr.filter(num => num % 2 !== 0);
};
console.log("Q15 Output:", oddNumbers([1, 2, 3, 4, 5, 6]));

// q No.16

// q No.16
let greaterThanTen = (arr) => {
     return arr.filter(num => num > 10);
};
console.log("Q16 Output:", greaterThanTen([5, 10, 12, 15, 3, 20]));

// q No.17
let largestNumber = (arr) => {
   return Math.max(...arr);
};
console.log("Q17 Output:", largestNumber([5, 10, 12, 3, 20]));