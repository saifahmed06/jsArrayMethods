/*
The sort() method sorts the items of an array in a specific order (ascending or descending).
*/
let cities = ["darjling","brazil","australia","columbia"];
//sort the city array in ascending order
let sortedArray = cities.sort();
console.log(sortedArray)

/*
Suppose we want to sort the above names array such that the longest name comes last, rather than sorting 
it alphabetically. We can do it in the following way:
*/

let names = ["ismail","saif","zeeshan"]

function length_compare(a,b){
    return a.length - b.length;
}
names.sort(length_compare);
console.log(names)