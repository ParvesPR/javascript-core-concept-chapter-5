var search = [1, 2, 45, 78, 5, 95, 8];
var find = 45;
var isFound = false;
for (var x = 0; x < search.length; x++) {
    if (search[x] === find) {
        console.log('Data found at index number ' + x);
        isFound = true;
        break;
    }
}
if (!isFound) {
    console.log('Data not found');
}