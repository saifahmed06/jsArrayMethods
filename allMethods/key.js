//key(): The keys() method returns an Array Iterator object with the keys of an array. The keys() method does not change the original array.
let elements = [1,2,3,4,5,6,7,8,9,10]
let Iterator = elements.keys();
for(let key of Iterator){
    console.log(key)
}
