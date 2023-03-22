{
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= array[0] && array[i] <= N) {
            count++;
        }
    }
    return count;
}