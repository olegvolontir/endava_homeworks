const ar = ['a', 't', 'c', ['t', ['t']], '4']

function countLetters(multiDimensionalArray) {
    res = new Map();

    flatAr = multiDimensionalArray.flat(Infinity);

    flatAr.forEach((element) => {
        if (res.has(element)) {
            res.set(element, res.get(element) + 1)
        }
        else { res.set(element, 1) }
    });

    return res;
}

console.log(countLetters(ar));