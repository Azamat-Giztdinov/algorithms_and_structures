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
