/* flat() : The flat() method creates a new array by flattening a nested array up to the specified depth.
Syntax
The syntax of the flat() method is:

arr.flat(depth)
*/

let sets = [1,2,[3,4,[5,6,[7,8]]]];

//reducing nesting by flattening the array to dept 2
let flattenArray = sets.flat(3);

console.log(flattenArray)