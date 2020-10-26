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

let str = prompt(`Please type some number with ,`);
let x = prompt(`Please type x number`);
let arr = str.split(`,`);

let convertedArray = convertToNumber(arr);

function convertToNumber(arr) {
    let convertedArr = [];
    convertedArr.push(...arr);
    for (let i = 0; i < arr.length; ++i) {
        convertedArr[i] = Number(arr[i]);
    }
    return convertedArr;
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

function findPosition1(arr = [1, 2, 3, 4, 5], x = 6) {
    let arrayNumber = [];
    arrayNumber.push(...arr);
    let allPositionInArrayNumber = [];
    for (let i = 0; i < arrayNumber.length; ++i) {
        for (let ii = i + 1; ii < arrayNumber.length; ++ii) {
            if (arrayNumber[i] + arrayNumber[ii] == x) {
                allPositionInArrayNumber.push(i, ii);
            }
        }
    }
    console.log(`findPosition1:`, pairStringInArray(allPositionInArrayNumber));
}

findPosition1(convertedArray, x);