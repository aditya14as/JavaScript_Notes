// while loop 

// 0 se 9 
// dry don't repeat yourself
// let i = 0; // 1 2 3 4

// while(i<=9){
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);
// console.log("hello");



// while loop example 
let num = 100;
// let total = 0; //1 + 2 +3
// let i = 0;


// while(i<=100){
//     total = total + i;
//     i++;
// }


// console.log(total);

// let total = (num*(num+1))/2;
// console.log(total);


// intro to for loop 
// print 0 to 9

// for(let i = 0;i<=9;i++){
//     console.log(i);
// }

// console.log("value of i is ",i);


// for loop example 

// let total = 0;

// let num2 = 100;

// for(let i = 1; i<=num; i++){
//     total = total + i;
// }

// console.log(total);


// break keywork

// continue keyword 

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
// console.log("hello there");


//For of and For in loop 
// For of is used on Array
// For in is used in object
const testArray = [2,3,4,5,67,70];

for(const n of testArray){
    console.log(n);
}

//for each loop
testArray.forEach((n)=>(console.log(n)));