// map: CREATES  a new array by performing some operation on each array element.
let arr = [45,23,31]
let a= arr.map((value,index,Array)=>{
    console.log(value,index,Array)
    return value+1

})
console.log(a)