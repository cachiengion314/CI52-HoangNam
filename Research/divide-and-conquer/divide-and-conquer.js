// merge sort
function merge2ArrayForMergeSort(leftArr, rightArr) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            sortedArray.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    return sortedArray.concat(leftArr.slice(leftIndex, leftArr.length),
        rightArr.slice(rightIndex, rightArr.length));
}

function mergeSort(array = [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) {
    if (array.length <= 1) {
        return array;
    }
    let middleIndex = Math.floor(array.length / 2);
    let leftArr = array.slice(0, middleIndex);
    let rightArr = array.slice(middleIndex, array.length);

    return merge2ArrayForMergeSort(mergeSort(leftArr), mergeSort(rightArr));
}

// my own version of quick sort
function merge2Array(leftArr, rightArr) {
    let finalArray = [];
    return finalArray.concat(leftArr, rightArr);
}

function quickSort(array = [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) {
    let sortedArray = [];
    sortedArray.push(...array);
    return divideAnArray(sortedArray);
}

function divideAnArray(array) {
    if (array.length <= 1) {
        return array;
    }
    let middleIndex = Math.floor(array.length / 2) - (array.length + 1) % 2;
    let pivotValue = array[middleIndex];
    let leftIndex = 0,
        rightIndex = array.length - 1;
    while (leftIndex <= rightIndex) {
        while (array[leftIndex] < pivotValue) {
            leftIndex++;
        }
        while (array[rightIndex] > pivotValue) {
            rightIndex--;
        }
        if (rightIndex >= leftIndex) {
            let temp = array[leftIndex];
            array[leftIndex] = array[rightIndex];
            array[rightIndex] = temp;
            leftIndex++;
            rightIndex--;
        }
    }
    let leftArr = array.slice(0, leftIndex);
    let rightArr = array.slice(leftIndex, array.length);
    return merge2Array(divideAnArray(leftArr), divideAnArray(rightArr));
}
// bubble sort
function bubbleSort(array = [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) {
    for (let i = 0; i < array.length - 1; ++i) {
        for (let j = i + 1; j < array.length; ++j) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}
// insertion sort
function insertSort(array = [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) {
    for (let i = 1; i < array.length; ++i) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

function insertSortWithFilter(array, filterCall) {
    for (let i = 1; i < array.length; ++i) {
        let key = filterCall(array[i]);
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && filterCall(array[j]) > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

function javascriptSort(array = [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) {
    return array.sort((a, b) => {
        return a - b;
    });
}

function measureExecutionTime(callback) {
    let startTimer = window.performance.now();
    callback();
    let endTimer = window.performance.now();
    return endTimer - startTimer;
}

console.log(`merge sort`, mergeSort());
console.log(`quick sort`, quickSort());
console.log(`bubble sort`, bubbleSort());
console.log(`insert sort`, insertSort());
console.log(`javascript sort`, javascriptSort());

function findTheBestSort() {
    let array = [
        { name: `mergeSort`, timer: measureExecutionTime(mergeSort) },
        { name: `quickSort`, timer: measureExecutionTime(quickSort) },
        { name: `bubbleSort`, timer: measureExecutionTime(bubbleSort) },
        { name: `insertSort`, timer: measureExecutionTime(insertSort) },
        { name: `javascriptSort`, timer: measureExecutionTime(javascriptSort) },
    ]
    insertSortWithFilter(array, (thing) => {
        return thing.timer;
    })
    console.log(array);
}
findTheBestSort();