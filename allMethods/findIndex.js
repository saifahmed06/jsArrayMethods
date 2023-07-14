/* The findIndex() method returns the index (position) of the first element that passes a test. The findIndex()
method returns -1 */


//function that return odd number
function isOdd(element){
    return element %2!==0;
}
//defining an array of integers
let numbers = [2,3,4,5,6]

//returns the index of the first odd number in the array
let firstOdd = numbers.findIndex(isOdd);
console.log(firstOdd)