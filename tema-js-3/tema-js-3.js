const ar = ['a', 't', 'c', ['t', ['t']], '4']

function countLetters(multiDimensionalArray) {
    res = new Map();

    for (elem of multiDimensionalArray.flat(Infinity)) {
        if (res.has(elem)) { res.set(elem, res.get(elem) + 1) } else { res.set(elem, 1) }
    }

    return res;
}

console.log(countLetters(ar));