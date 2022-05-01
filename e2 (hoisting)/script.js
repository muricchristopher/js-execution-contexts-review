// Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution. (Creation Phase)

// Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.



//Function Hosting

/* 
    Phase: Creation
    catName: fn 
*/

catName("Tiger") // My cat's name is Tiger

function catName(name) {
  console.log("My cat's name is " + name);
}

//before the execution phase, all functions are already complete hoisted



//var Hoisting

/* 
    Phase: Creation
    num: undefined
*/

console.log(num) // undefined
var num; // Declaration
num = 6; // Initialization
console.log(num) //6



// let and const Hoisting

// Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value.

console.log(myConst); //ReferenceError: can't access lexical declaration 'myConst' before initialization

const myConst = 'MyConst'