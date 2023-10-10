function quickSort(array) {
    let size = array.length;
    if (size <= 1) {
        return array;
    }
    let left = [];
    let rigth = [];
    for (let i = 1; i < size; i++) {
        if (array[0] > array[i]) {
            left.push(array[i]);
        } else {
            rigth.push(array[i]);
        }
    }
    return [...quickSort(left), array[0], ...quickSort(rigth)];
}
