//filter method

let arr2 = [45,23,21,0,3,5]
let z=arr2.filter((a)=>{
    return a<10

})
console.log(arr2) //it does not modify original array
console.log(z)