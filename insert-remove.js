// Insert & Remove Element
var arr = [1, 2, 3, 4, 5, 6, 7];
// Remove the first element
arr.shift()
// Remove the last element
arr.pop();
// Insert 9 in the last index
arr.push(9);
// Insert element at the start of the array
arr.unshift(10)
// Index position, delete-count and insert new element
arr.splice(4, 1, 9, 11);
// Delete element insert according to index number
arr.splice(3, 1);
arr[3] = 40;
console.log(arr);