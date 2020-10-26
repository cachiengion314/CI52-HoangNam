console.log(`2.
Nhập 1 dãy các số, mỗi số ngăn cách nhau bởi dấu ",". 
Nhập vào 1 số x bất kì. Hãy tìm các vị trí (i, j) (i < j) thỏa mãn tổng của 2 số tại vị trí i và j bằng số x.
Ví dụ:
Input:
dãy số: 1, 2, 3, 4, 5
số x: 6
Output:
(0, 4), (1, 3)
`);

// let str = prompt(`Please type some number with ,`);
// let x = prompt(`Please type x number`);
// let arr = str.split(`,`);

function indsertionSort(arr) {
    let sortedArray = [];
    sortedArray.push(...arr);
    for (let i = 1; i < sortedArray.length; ++i) {
        let ii = i - 1;
        let key = sortedArray[i];
        while (ii >= 0 && sortedArray[ii] > key) {
            sortedArray[ii + 1] = sortedArray[ii];
            ii--;
        }
        sortedArray[ii + 1] = key;
    }
    return sortedArray;
}

function bubbleSort(arr) {
    let sortedArray = [];
    sortedArray.push(...arr);
    for (let i = 0; i < sortedArray.length - 1; ++i) {
        for (let ii = i + 1; ii < sortedArray.length; ++ii) {
            if (sortedArray[i] > sortedArray[ii]) {
                [sortedArray[i], sortedArray[ii]] = [sortedArray[ii], sortedArray[i]];
            }
        }
    }
    return sortedArray;
}

function pairStringInArray(array) {
    let str = ``;
    for (let i = 0; i < array.length; ++i) {
        if (i % 2 != 0 && i < array.length - 1) {
            str += `, ` + array[i] + `), `;
        } else if (i % 2 != 0 && i == array.length - 1) {
            str += `, ` + array[i] + `)`;
        } else {
            str += `(` + array[i];
        }
    }
    return str;
}

function indexOfNumberInArray(number, array) {
    let index = 0;
    for (let i = 0; i < array.length; ++i) {
        if (array[i] == number) {
            index = i;
        }
    }
    return index;
}

function findPosition1(arr = [1, 2, 3, 4, 5], x = 6) {
    let arrayNumber = [];
    arrayNumber.push(...arr);
    let allPositionInArrayNumber = [];
    for (let i = 0; i < arrayNumber.length - 1; ++i) {
        for (let ii = i + 1; ii < arrayNumber.length; ++ii) {
            if (arrayNumber[i] + arrayNumber[ii] == x) {
                allPositionInArrayNumber.push(i, ii);
            }
        }
    }
    console.log(`findPosition1:`, pairStringInArray(allPositionInArrayNumber));
}

function findPosition2(arr = [1, 2, 3, 4, 5], x = 6) {
    let arrayNumber = [];
    arrayNumber.push(...arr);
    let sortedArray = indsertionSort(arrayNumber);
    let allPositionInArrayNumber = [];

    for (let i = 0, ii = sortedArray.length - 1; i < ii;) {
        if (sortedArray[i] + sortedArray[ii] < x) {
            i++;
        } else if (sortedArray[i] + sortedArray[ii] > x) {
            ii--;
        } else {
            let indexi, indexii, position;
            indexi = indexOfNumberInArray(sortedArray[i], arrayNumber);
            indexii = indexOfNumberInArray(sortedArray[ii], arrayNumber);
            if (indexi < indexii) {
                position = [indexi, indexii];
            } else {
                position = [indexii, indexi];
            }
            allPositionInArrayNumber.push(...position);
            i++;
        }
    }
    console.log(`findPosition2:`, pairStringInArray(allPositionInArrayNumber));
}

function findPosition3(arr = [1, 2, 3, 4, 5], x = 6) {
    let arrayNumber = [];
    arrayNumber.push(...arr);
    let hashMap = {};
    let allPositionInArrayNumber = [];
    for (let value of arrayNumber) {
        if (hashMap[value]) {
            let index1, index2, position;
            index1 = indexOfNumberInArray(x - value, arrayNumber);
            index2 = indexOfNumberInArray(value, arrayNumber);
            if (value > x - value) {
                position = [index1, index2]
            } else {
                position = [index2, index1]
            }
            allPositionInArrayNumber.push(...position);
        } else {
            hashMap[x - value] = true;
        }
    }
    console.log(`findPosition3:`, pairStringInArray(allPositionInArrayNumber));
}

findPosition1();
findPosition2();
findPosition3();

// quick sort

var items = [4, 1, 2, 3, 9, 7];

function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(`sorted internet array:`, sortedArray); //prints [2,3,5,6,7,9]

/// rewrite 1

let myOwnArray = [5, 6, 8, 6, 9, 2, 6];

function myOwnSwap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function myOwnPartition(items, leftIndex, rightIndex) {
    var pivotValue = items[Math.floor((rightIndex + leftIndex) / 2)];
    let i = leftIndex;
    let ii = rightIndex;
    while (i <= ii) {
        while (items[i] < pivotValue) {
            i++;
        }
        while (items[ii] > pivotValue) {
            ii--;
        }
        if (i <= ii) {
            myOwnSwap(items, i, ii);
            i++;
            ii--;
        }
    }
    return i;
}

function myOwnQuickSort(items, leftIndex, rightIndex) {
    let partitionIndex = myOwnPartition(items, leftIndex, rightIndex);


    if (leftIndex < partitionIndex - 1) {
        myOwnQuickSort(items, leftIndex, partitionIndex - 1);
    }
    if (partitionIndex < rightIndex) {
        myOwnQuickSort(items, partitionIndex, rightIndex);
    }
    return items;
}

let sortedArray2 = myOwnQuickSort(myOwnArray, 0, myOwnArray.length - 1);
console.log(`myOwnQuickSort:`, sortedArray2);