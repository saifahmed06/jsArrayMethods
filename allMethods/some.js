/*
The some() method tests whether any of the array elements pass the given test function.
*/
// a test function: returns an even number
function isEven(element) {
    return element % 2 === 0;
  }
  
  // defining an array
  let numbers = [1, 3, 2, 5, 4];
  
  // checks whether the numbers array contain at least one even number
  console.log(numbers.some(isEven));
  
  // Output: true 