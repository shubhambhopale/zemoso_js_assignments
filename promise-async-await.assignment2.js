/**
*
* Assume we are fetching the data from a rest endpoint in the get data function.
* we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
*
*/

/*
function getData(uId) {
setTimeout(() => {
console.log("Fetched the data!");
return "skc@gmail.com";
}, 4000);
}

console.log("start");
var email = getData("skc");
console.log("Email id of the user id is: " + email);
console.log("end");
*/


/*
*
*Problem Statement: How do you solve this problem. How can we wait for till the function execution is completed, 
*so that we can have correct email at line 10?
*
*/

// using the fetch API here to replace and simulate the setTimeout()
async function getData(uId) {

  let response = await fetch(`https://api.github.com/users/${uId}`);
  let user = await response.json();
  
  console.log(`Fetched the data! for ${user.name}`);
  
  return `${user.login}@gmail.com`;
}

// await getData() can be used in another Async function only so created this function
async function printDetails() {
  console.log("start");

  let email = await getData("shubhambhopale");

  console.log("Email id of the User is: " + email);

  console.log("end");
}

printDetails();

/*
Expected Result:
  "start"
  "Fetched the data! for Shubham Bhopale"
  "Email id of the User is: shubhambhopale@gmail.com"
  "end"
*/
