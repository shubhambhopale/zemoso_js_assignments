/*
Refactor the following function into a one-liner:
const printName = (name) => {
                     return “Hi” + name;
           }
*/
// one liner arrow function
const printName = name => "Hi " + name;

console.log(printName('Shubham'));

//Expected Output: "Hi Shubham"


/*
Rewrite the following code using template literals
const printBill = (name, bill) => {
                     return “Hi “ + name + “, please pay: “ + bill;
           }
*/

// code snippet using template literals
const printBill = (name, bill) => {
                     return `Hi ${name}, please pay: ${bill}`;
                }

console.log(printBill('Shubham', 20));

//Expected Output: "Hi Shubham, please pay: 20"


/*
Modify the following code such that the object properties are destructured and logged.
const person = {
                      name: “Noam Chomsky”,
                      age: 92
            }
           
           let name = person.name;
           let age = person.age;
           console.log(name);
           console.log(age);
*/

// destructuring and printing object properties below
const person = {
                name: “Noam Chomsky”,
                age: 92
               }
           
const {name, age} = person;

console.log(name);
console.log(age);
