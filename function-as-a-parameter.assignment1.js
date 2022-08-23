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
