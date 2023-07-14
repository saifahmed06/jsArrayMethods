/*
flatmap() method maps all array elements and creates a new flat array. flatMap() creates a new array from calling a
function for every array elemen
*/

let arr = [1,2,3,4,5]

const result= arr.flatMap((x)=>[x**2])
console.log(result)