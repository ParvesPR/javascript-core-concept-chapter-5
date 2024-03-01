// Insert & Remove Element
var arr = [1, 2, 3, 4, 5, 6, 7];
// Insert 9 in the last index
arr.push(9);
// Remove the last element
arr.pop();
// Remove the first element
// arr.shift()
// Insert element at the start of the array
arr.unshift(10)
// Index position, delete-count and insert new element
arr.splice(4, 1, 9, 11)
console.log(arr);