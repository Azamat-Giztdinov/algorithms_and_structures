const array = [3843, 23, 43, -1, 293, 2, 454, -33, 0, 322, 5, 7, 20, -90];

function selectionSort(array) {
    const size = array.length;
    for (let i = 0; i < size; i++) {
        let minIndex = i;
        for (let j = i + 1; j < size; j++) {
            if (array[j] < array[minIndex]) minIndex = j;
        }
        let tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
    return array
}

console.log(selectionSort(array));
