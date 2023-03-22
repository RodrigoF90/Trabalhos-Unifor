function partition (itens, left, right) {
    let pivot = itens[Math.floor((right + left) / 2)], i = left, j = right
    while (i <= j) {
        while (itens[i] < pivot) {
            i++
        }
        while (itens[j] > pivot) {
            j--
        }
        if (i <= j) {
            [itens[i], itens[j]] = [itens[j], itens[i]]
            i++
            j--
        }
    }
    return i
}