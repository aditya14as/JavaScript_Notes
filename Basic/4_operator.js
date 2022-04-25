// booleans & comparison operator 
// booleans 
// true, false 

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);

// == vs === 
// == this will only compare value but not data type e.g. let num1 = 7 and let string1 = "7" will give true but its data type is different
// to compare value along with data type we use ===
// console.log(num1 === num2);


// As == and === , != compares only value e.g. let num1= 5 and let string2 = "5" will give false because value is equal
// for consider data type also we use !==
//== and != in js is one of different feature from other language where only value is getting compared
// != vs !==

// console.log(num1 !== num2);


// if else condition 

// let age = 17;

// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }


// ternary operator 
// let age = 4;
// let drink;
// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }
// console.log(drink);
// ternary operator / conditional operator 
// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);



// and  or operator 



// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
let firstName = "arshit";
let age = 16;

if(firstName[0] === "H" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}