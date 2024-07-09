const arr = [1, 2, 7, 9, 5, 2, 1];

function uniqueSort(arr) {
    const unique = arr.filter((item, index) => arr.indexOf(item) === index);
    const sortAr = unique.sort((a, b) => a - b);
    return sortAr;
}

const uniqueSortArr = uniqueSort(arr);
console.log(uniqueSortArr);