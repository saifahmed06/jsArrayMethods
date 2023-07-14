// function checkAdult(age){
//     return age >=18;
// }
// const ageArray = [10,23,43,2]
// let check = ageArray.every(checkAdult);
// console.log(check)

//self solved :

const arr = [1,2,3,4,5,6,7,8]
function allEven(arr){
    return arr %2==0;
}
let result = arr.every(allEven)
console.log(result)
