// Traverse an array
var arr = [1, 2, 46, 65, 8, 89];
var arr2 = [1, 0, 40, 30, 20, 10];

for (var x = 0; x < arr.length; x++) {
    arr[x] = arr[x] + 1; /* 1 will be added to each number */
    // console.log(arr[x]);
}

// Summation an array
var sum = 0;
for (var x = 0; x < arr2.length; x++) {
    sum += arr2[x];
}
// console.log(sum);

// Summation ODD number
var sum = 0;
for (var x = 0; x < arr.length; x++) {
    if (arr[x] % 2 === 1) {
        console.log(arr[x]);
        sum += arr[x];
    }
}
console.log('Odd Number summation= ' + sum);

// Summation Even number
var sum = 0;
for (var x = 0; x < arr.length; x++) {
    if (arr[x] % 2 === 0) {
        console.log(arr[x]);
        sum += arr[x];
    }
}
console.log('Ever Number summation= ' + sum);
