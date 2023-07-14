let numbers = [1,2,3,4,5,6,7,8,9,10];
function checkEven(numbers){
    if(numbers % 2==0)
    return true;
    else
    return false
}
let evenNumbers= numbers.filter(checkEven);
console.log(evenNumbers)

//check odd numbers
let numbers2 = [1,2,3,4,5,6,7,8,9,10];
function checkOdd(numbers){
    if(numbers2 % 2==1)
    return true;
    else
    return false
}
let OddNumbers= numbers.filter(checkOdd);
console.log(OddNumbers)