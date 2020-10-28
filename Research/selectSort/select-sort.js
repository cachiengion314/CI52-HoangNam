// Algorithms from internet
// Selection sort with O(n^2) time complexity

function Selection_Sort(arr, compare_Function) {

    function compare(a, b) {
        return a - b;
    }
    var min = 0;
    var index = 0;
    var temp = 0;

    //{Function} compare_Function Compare function
    compare_Function = compare_Function || compare;

    for (var i = 0; i < arr.length; i += 1) {
        index = i;
        min = arr[i];

        for (var j = i + 1; j < arr.length; j += 1) {
            if (compare_Function(min, arr[j]) > 0) {
                min = arr[j];
                index = j;
            }
        }

        temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    }

    //return sorted arr
    return arr;
}

console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return a - b; }));
console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return b - a; }));


// rewrite algorithm

function myOwnSelectSort(array = [3, 0, 2, 5, -1, 4, 1]) {
    let sortedArr = [];
    sortedArr.push(...array);
    for (let i = 0; i < sortedArr.length; ++i) {
        minValue = sortedArr[i];
        minValueIndex = i;
        for (let j = i + 1; j < sortedArr.length; ++j) {
            if (minValue > sortedArr[j]) {
                minValue = sortedArr[j];
                minValueIndex = j;
            }
        }
        [sortedArr[i], sortedArr[minValueIndex]] = [sortedArr[minValueIndex], sortedArr[i]];
    }
    return sortedArr;
}
console.log(myOwnSelectSort());