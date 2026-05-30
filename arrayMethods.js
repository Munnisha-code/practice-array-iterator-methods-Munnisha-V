// push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(),
//concat(), slice(), splice(), sort(), and reverse(). 

//Task 1: Adding and Removing Elements
// add  "orange" to the end of the array.
// Remove the first element.
//Add "grape" to the beginning of the array.
//Submit the final fruits array.

let fruits = ["apple", "banana", "cherry"];
    fruits.push("orange");
    fruits.pop();
    fruits.unshift("grape");
console.log(fruits);

//Task 2: Query and Access
//Check if "blue" is in the array (using includes()).
// Find the first index of "blue" (using indexOf()).
//Find the last index of "blue" (using lastIndexOf()).
//Submit the results as an array in the following format:
//[includesResult, firstIndex, lastIndex]

let colors = ["red", "blue", "green", "blue", "yellow"];
    let includesResult = colors.includes("blue");
    let firstIndex = colors.indexOf("blue");
    let lastIndex = colors.lastIndexOf("blue");

console.log([includesResult, firstIndex, lastIndex]);

//Task 3: Combining Arrays
//Combine the two arrays into a single array called allTeams.
//Add "Eve" to the end of the combined array.
//Submit the final allTeams array

let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];

let allTeams = teamA.concat(teamB)
    allTeams.push("Eve");
 console.log(allTeams);
 
//Task 4: Extracting and Splicing
//Use slice() to create a new array called middleNumbers containing only the second and third elements.
// Use splice() to remove the last two elements from the original array and add 60 and 70 in their place.
// Submit both the middleNumbers and modified numbers arrays. 

let numbers = [10, 20, 30, 40, 50];

let middleNumbers = numbers.slice(1, 3);
numbers.splice(3, 2, 60, 70);

console.log(middleNumbers);
console.log(numbers);
 
//Sorting and Reversing
//Sort the scores in ascending order.
//Reverse the sorted array.
//Submit the final scores array.

let scores = [85, 70, 95, 60, 75];

scores.sort((a,b) => b-a).reverse();
console.log(scores);





