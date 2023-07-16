/*
The splice() method modifies an array (adds, removes or replaces elements).

splice() Syntax
The syntax of the splice() method is:

arr.splice(start, deleteCount, item1, ..., itemN)
Here, arr is an array.

splice() Parameters
The splice() method takes in:

start - The index from where the array is changed.
deleteCount (optional) - The number of items to remove from start.
item1, ..., itemN (optional) - The elements to add to the start index. 
If not specified, splice() will only remove elements from the array.
*/
let prime_numbers = [2, 3, 5, 7, 9, 11];
let removedElement = prime_numbers.splice(3,1,13);
console.log(removedElement)
console.log(prime_numbers)