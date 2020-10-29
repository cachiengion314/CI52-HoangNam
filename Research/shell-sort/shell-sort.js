function shellSort(arr) {
    let increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            let j = i;
            let temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return arr;
}
console.log(shellSort([4, 1, 3, 7, 2, 0]));

// rewrite algorithms
function myOwnShellSort(array = [4, 1, 3, 7, 2, 0]) {
    let sortedArray = [];
    sortedArray.push(...array);
    let middleIndex = Math.floor(sortedArray.length / 2);
    while (middleIndex > 0) {
        for (let i = middleIndex; i < sortedArray.length; ++i) {
            let keyValue = sortedArray[i];
            let tempIndex = i;
            while (tempIndex >= middleIndex && keyValue < sortedArray[tempIndex - middleIndex]) {
                sortedArray[tempIndex] = sortedArray[tempIndex - middleIndex];
                tempIndex = tempIndex - middleIndex;
            }
            sortedArray[tempIndex] = keyValue;
        }
        middleIndex = Math.floor(middleIndex / 2);
    }
    return sortedArray;
}
console.log(myOwnShellSort());