//The map() method creates a new array with the results of calling a function for every array element.

// let numbers = [2,3,4,5,6];

// //function to return the square of a number
// function square(arrayEle){
//     return arrayEle*arrayEle;
// }

// //apply square( function to each item of the number array

// let square_numbers = numbers.map(square)
// console.log(square_numbers)


//example 2
const string = "JavaScript";
const stringArr = string.split(''); // array with individual string character

let asciiArr = stringArr.map(x => x.charCodeAt(0));
// map() does not change the original array
console.log(stringArr); // ['J', 'a', 'v', 'a','S', 'c', 'r', 'i', 'p', 't']

console.log(asciiArr); // [ 74,  97, 118,  97, 83,  99, 114, 105, 112, 116 ]