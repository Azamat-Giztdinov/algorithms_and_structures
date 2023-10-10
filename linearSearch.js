function linearSearch(array, item) {
    for (const index in array) {
        if (array[index] === item) {
            return index;
        }
    }
    return null;
}