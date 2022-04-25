"use strict";
// use strict is use when we want to get warning which normal js ignore
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable 

var firstName = "Aditya";

// use a variable 
console.log(firstName);

// change value 

firstName = "Mohit";

console.log(firstName);







// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
// var firstName = "harshit"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase 




// let keyword 
// declare variable with let keyword
//let keyword warns when we declare variable with same name
 
let firstName = "harshit";
firstName = "Mohit";
console.log(firstName);
//console.log(2**4) // it's basically 2 to the power 4
// console.log(2**0.5) // it's basically root under 2
// console.log(2*2) // it's basically 2 multiply 2


// declare constants 

const pi = 3.14;
console.log(pi);