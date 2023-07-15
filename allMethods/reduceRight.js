/*
The reduceRight() method reduces the array to a single value by executing a callback function on two values of the array (from right to left).
*/
let numbers = [1, 2, 3, 4];
function sumReduce(a,b){
    return a+b;
}
let sum = numbers.reduceRight(sumReduce)
console.log(sum)