// const array = [3843, 23, 43, -1, 293, 2, 454, -33, 0, 322, 5, 7, 20, -90];

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

// console.log(quickSort(array))