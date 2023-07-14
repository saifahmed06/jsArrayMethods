/*findLastIndex.js : indLastIndex() method is used to find the index of the last element in an array that matches the specified
condition
*/
let numbers = [1,2,3,4]
function isOdd(numbers){
    return numbers %2!==0;
}
let result = numbers.findLastIndex(isOdd)
console.log(result)