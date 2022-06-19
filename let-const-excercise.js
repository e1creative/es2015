/*
let and const Exercise

In this exercise, you’ll refactor some ES5 code into ES2015.
ES5 Global Constants

var PI = 3.14;
PI = 42; // stop me from doing this!

ES2015 Global Constants

// Write an ES2015 Version 


What is the difference between var and let?
- let cannot be redclared and is block scoped

What is the difference between var and const?
- const cannot be redclared or reassigned and is block scoped

What is the difference between let and const?
- let can be reassigned and const cannot be declared without an assignment

What is hoisting?
- hoisting is when var and function declarations are assessed before running code
*/

/*-------------------------------------------------------------------------*/

/*
Arrow Functions Exercise

In this exercise, you’ll refactor some ES5 code into ES2015.
ES5 Map Callback

function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

ES2015 Arrow Functions Shorthand

Refactor the above code to use two arrow functions. Turn it into a one-liner.

// Write an ES2015 Version

Refactor the following function to use arrow functions:

Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
*/

/*-------------------------------------------------------------------------*/

/*
Rest / Spread Operator Exercises

In this exercise, you’ll refactor some ES5 code into ES2015.
Given this function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

Refactor it to use the rest operator & an arrow function:

// Write an ES2015 Version

findMin

Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

mergeObjects

Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

doubleAndReturnArgs

Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

Slice and Dice!

For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.

// remove a random element in the items array and return a new array without that item.

function removeRandom(items) {

}

// Return a new array with every item in array1 and array2.

function extend(array1, array2) {

}

// Return a new object with all the keys and values from obj and a new key/value pair

function addKeyVal(obj, key, val) {

}


// Return a new object with a key removed.

function removeKey(obj, key) {

}


// Combine two objects and return a new object.

function combine(obj1, obj2) {

}


// Return a new object with a modified key and value.

function update(obj, key, val) {

}
*/

/*-------------------------------------------------------------------------*/

/*
Object Enhancements Exercise

In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.
Same keys and values

function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}

Same keys and values ES2015

// Write an ES2015 Version

Computed Property Names

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

Computed Property Names ES2015

// Write an ES2015 Version

Object Methods

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

Object Methods ES2015

// Write an ES2015 Version

createAnimal function

Write a function which generates an animal object. The function should accepts 3 arguments:

        species: the species of animal (‘cat’, ‘dog’)
        verb: a string used to name a function (‘bark’, ‘bleet’)
        noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
*/

/*-------------------------------------------------------------------------*/

/*
Destructuring Exercise
Object Destructuring 1

What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

Object Destructuring 2

What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?

Object Destructuring 3

What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?

Array Destructuring 1

What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?

Array Destructuring 2

What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?

Array Destructuring 3

What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?

ES2015 Refactoring

In this exercise, you’ll refactor some ES5 code into ES2015.
ES5 Assigning Variables to Object Properties

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

ES2015 Object Destructuring

// Write an ES2015 Version

ES5 Array Swap

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

ES2015 One-Line Array Swap with Destructuring

// Write an ES2015 Version

raceResults()

Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

        first: the first element in the array
        second: the second element in the array
        third: the third element in the array
        rest: all other elements in the array

Write a one line function to make this work using

        An arrow function
        Destructuring
        ‘Enhanced’ object assignment (same key/value shortcut)

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])


  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

/*-------------------------------------------------------------------------*/

/*
Maps and Sets Exercise
Quick Question #1

What does the following code return?

new Set([1,1,2,2,3,4])

Quick Question #2

What does the following code return?

[...new Set("referee")].join("")

Quick Questions #3

What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

hasDuplicate

Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

vowelCount

Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
*/