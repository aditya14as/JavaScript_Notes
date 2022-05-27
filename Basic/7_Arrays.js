// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
// let fruits = ["apple", "mango", "grapes"];
// let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));


// array indexing 

// array push pop 

// array shift unshift: Slow as compared to push and pop


//Push and POP will add and remove from end
// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// // push 
// fruits.push("banana");
// console.log(fruits);
// // pop 
// let poppedFruit = fruits.pop();  //Will pop fruits that are at last index
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);



// unshift : Add at the begining index of the array 
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// shift : Remove from the beginning index of the Array
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);


//Fill and Filter in array

// var testArray = [2,3,4,56,67,7,7];
// console.log(testArray);
// testArray.fill("aditya");
// console.log(testArray)
// testArray.fill("1",2,4); //start index inclusive and end index exclusive
// console.log(testArray)

// const testArray = [2,3,4,5,67,70];

// const myNumber = testArray.filter((e)=>(e<50));
// console.log(myNumber); 


//Slice and Splice in JS
// const testArray = [2,3,4,5,67,70];

// // const myNumber = testArray.slice(1,3); // create array with index 1 and index 2 because 3 in exclusive
// const myNumber = testArray.slice(3); //length of 3 starting from 0 will be cut out. Output : [ 5, 67, 70 ]
// console.log(myNumber); 
const testArray = [2,3,4,5,67,70];

testArray.splice(1,3,"HI"); //1 is starting index 3 is total length, all changed to HI, Output [ 2, 'HI', 67, 70 ]
console.log(testArray);
