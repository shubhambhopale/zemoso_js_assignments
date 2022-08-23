//Problem Statement 1: Write a program to demonstrate how a function can be passed as a parameter to another function.

// main function
function myFunction(printStatement, myAnotherFuctionRef) {
  // invoking another method implementation passed as a parameter here  
  myAnotherFunction(printStatement);
}

// this is a function which will be passed as a parameter
function myAnotherFunction(printMeThis) {
  console.log(printMeThis);
}

// now passing function as a parameter here
myFunction("This is a Pass By Function!", myAnotherFunction);


//Expected Result: "This is a Pass By Funtion!"





//Problem Statement 2: An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. 
//For the arguments Roger and Waters, the function returns ‘RW’. Write this function.

// arrow function
let myArrowFunction = (fname, lname) => {
  return fname.charAt(0) + lname.charAt(0);
};

// invoking my Arrow function
let output = myArrowFunction('Shubham', 'Bhopale');

console.log(output);

//Expected Result: "SB"
