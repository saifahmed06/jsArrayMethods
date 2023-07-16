/*
The values() method returns a new Array Iterator object that contains the values for each index in the array.
*/
let languages = ["JavaScript","pyhton","java"]
let iteratorObject = languages.values();

//looping through iterator
for(let value of iteratorObject){
    console.log(value);
}