// Create an array
let fruits = ["Maçã", "Banana", "Cereja"];

// Access elements
console.log(fruits[0]); // Output: Maçã
console.log(fruits[1]); // Output: Banana

// Add an element to the end of the array
fruits.push("Laranja");
console.log(fruits); // Output: ["Maçã", "Banana", "Cereja", "Laranja"]

// Remove the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Maçã", "Banana", "Cereja"]

// Iterate over the array
fruits.forEach(function(item, index) {
    console.log(index, item);
});
// Output:
// 0 Maçã
// 1 Banana
// 2 Cereja

// Find an element in the array
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Remove an element by index
fruits.splice(index, 1);
console.log(fruits); // Output: ["Maçã", "Cereja"]