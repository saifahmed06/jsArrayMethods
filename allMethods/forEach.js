/*
 The forEach() method executes a provided function for each array element.
*/

let nums = [1,2,3,4,5]

function plusOne(element){
    console.log(element+1)
}

let operation = nums.forEach(plusOne)
console.log(operation)


