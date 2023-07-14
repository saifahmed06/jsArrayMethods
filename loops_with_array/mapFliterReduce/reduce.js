//Array reduce method
/*
let arr3 = [1,2,3,4,5,2,1]

let newArray = arr3.reduce((e1,e2)=>{
    return e1+e2
})
console.log(newArray)
*/

//reduce using a function

let arr3 = [1,2,3,4,5,2,1]
const reduce_func = (e1,e2)=>{
    return e1+e2
}

let newArray = arr3.reduce(reduce_func)
console.log(newArray)
