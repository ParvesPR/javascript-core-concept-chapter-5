var arr = [1, 65, 78, 3, 7];
var arr2 = [11, 55, 88, 33, 70];
var arr3 = arr.concat(arr2) /* Combines tow or more array */
var arr4 = Array.from(arr); /* Create a new array */
arr4[0]=3
console.log(arr.join(',')); /* Convert into a separated string */
console.log(arr.fill(0)); /* Change all the value */
console.log(arr3);
console.log(arr);
console.log(arr4);