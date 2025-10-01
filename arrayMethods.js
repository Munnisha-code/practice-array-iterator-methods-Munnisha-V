// Task 1: Using forEach()
let favoriteCities = ["Paris", "Tokyo", "London", "New York", "Sydney"];
favoriteCities.forEach(city => {
    console.log(city.toUpperCase());
});


// Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares);


// Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);


// Task 4: Finding with find() and findIndex()
let favoriteFood = ["Pizza", "Sushi", "Taco", "Burger", "Pasta", "Salad"];
let firstLongFood = favoriteFood.find(food => food.length > 4);
console.log(firstLongFood); 


let indexLongFood = favoriteFood.findIndex(food => food.length > 4);
console.log(indexLongFood); 

