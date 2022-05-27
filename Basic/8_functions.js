// function greeting(name){
//     console.log(`Here ${name}, Namaste!`);
// }

// greeting("Aditya")

//Function are assigned to a variable so its call should be below this function
//where as function declare without variable can be called from anywhere because it's global 
// var getName = function(name){
//     return `Hello ${name}`;
// }

// console.log(getName("aditya"));

//Callback and Arrow function
// var isEven = (element) =>{
//     return element%2===0;
// }

// var result = [2,4,6,8].every(isEven); //here isEven don't have parenthesis
// console.log(result);

//Callback function:- simple function with no name
var result = [2,4,6,8].every((element)=>{
    return element%2==0; //here return is there so we have curly braces{} for the blocks
}); 
console.log(result);

var result = [2,4,6,8].every( (element)=> (element%2===0) ); //here don't have return is there is no curly braces{} for the blocks
console.log(result);