const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            return middle;
        } else if (array[middle] < item) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return null;
}

console.log(binarySearch(array, 9));