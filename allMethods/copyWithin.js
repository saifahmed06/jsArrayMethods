 
 /*SYNTAX : arr.copyWithin(target, start, end)
 TARGET: from which index no we want to start
 start: from which index no we want to select elelments to get copied
 end : at which index no you want this operation to be don irrespective of no of elements needs to get copied
 
 
 
 */
 let fruits = [1, 2, 3, 4,5];
let words = [1, 2, 3, 4];


fruits.copyWithin(1, 0, 3);
words.copyWithin(3, 0);



console.log(fruits)
console.log(words);


// copies element from index 0 to index 3 


// modifies the original array 
