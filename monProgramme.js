const fs = require('fs');

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');
const array = data.split(' ').map(function(item) {
    return parseInt(item, 10);
});

console.log(array)

//Merge Sort
const toMergeSortArray = Object.values(array);
var comparaison = []

const merge = (left, right) => {
    let sortedArray = [];
    while (left.length && right.length) {
        comparaison.push(1);
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        };
    };

    return [...sortedArray, ...left, ...right];
};

const mergeSort = (array) => {
    const half = array.length / 2;
    if (array.length <= 1) {
        return array;
    }
    const left = array.splice(0, half);
    const right = array;
    return merge(mergeSort(left), mergeSort(right));
}

const mergedSortArray = mergeSort(toMergeSortArray)

console.log(`Tri fusion: ${comparaison.length} comparaisons - [${mergedSortArray}]`)