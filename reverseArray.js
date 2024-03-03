// Reverse An Array
var arr = [1, 2, 3, 4, 5];

for (var x = 0; x < arr.length / 2; x++) {
    var temp = arr[x];
    arr[x] = arr[arr.length - 1 - x];
    arr[arr.length - 1 - x] = temp;
}
console.log(arr);
// Easy method
console.log(arr.reverse());
