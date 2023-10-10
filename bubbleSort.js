// const array = [3843, 23, 43, -1, 293, 2, 454, -33, 0, 322, 5, 7, 20, -90];

function bubbleSort(array) {
    const size = array.length;
    for (let i = 1; i < size; i++) {
        for (let j = 0; j < size - i; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

// console.log(bubbleSort(array));