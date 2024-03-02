var arr = [
    [43, 78, 94, 89],
    [52, 85, 88, 92],
    [55, 40, 96, 91]
]
for (var x = 0; x < arr.length; x++) {
    // console.log(arr[x]);
    for (var y = 0; y < arr[x].length; y++) {
        console.log('Element of ' + x + ': ' + arr[x][y]);
    }
}