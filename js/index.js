// Iteration 1: Names and Input
let hacker1 = "Alberto";
console.log("The driver's name is " + hacker1);
let hacker2 = "Chrome";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} 

else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
  } 
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}
// Iteration 3: Loops
//3.1
const nameArray = hacker1.split("");
const nameWithSpaces = nameArray.join (" "); 
console.log(nameWithSpaces.toUpperCase());

//3.2
var navigatorArray = hacker2.split("");
var navigatorReverse = navigatorArray.reverse();

for (let i = 0; i < navigatorReverse.length; i++ ) {
console.log(navigatorReverse.join(""));
}

//3.3

if (nameArray[0].localeCompare(navigatorArray[0]) === -1) {
    console.log("The driver's name goes first.")
}

else if (nameArray[0].localeCompare(navigatorArray[0]) === 1) {
    console.log("Yo, the navigator goes first definitely.")
}

else {
    console.log("What?! You both have the same name?")
}  