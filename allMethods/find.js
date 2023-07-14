// let numbers = [1,3,4,9]
// //function to check even number
// function isEven(number){
//     return number %2==0;
// }

// //get the first even number
// let evenNumber = numbers.find(isEven);
// console.log(evenNumber)


let arr = [1,2,3,4,5,6,7,8]
function isEven(arr){
    return arr %2==0
}
let result = arr.find(isEven)
console.log(result)