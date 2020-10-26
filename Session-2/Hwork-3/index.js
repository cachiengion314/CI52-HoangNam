console.log(`3.
Bài 3 (Thuật toán): Nhập vào 1 mảng, hãy in ra những phần tử không trùng lặp trong mảng đó?
Ví dụ: 
    [1, 1, 2, 3, 3, 4, 5, 5] --> in ra 2, 4
    [-2, 2, 4, 6, -2, 10] --> in ra 2, 4, 6, 10
`);

let str = prompt(`Please type some number with ,`);
let arr = str.split(`,`);

let convertedArray = convertToNumber(arr);

function convertToNumber(arr) {
    let convertedArr = [];
    convertedArr.push(...arr);
    convertedArr.map((item) => {
        return Number(item);
    });
    return convertedArr;
}

function findFrequency(array = [-2, 2, 4, 6, -2, 10]) {
    let frequencyArr = [];
    array.map(() => {
        frequencyArr.push(1);
    })
    for (let i = 0; i < array.length; ++i) {
        for (let j = 0; j < array.length; ++j) {
            if (array[i] == array[j] && i != j) {
                frequencyArr[i]++;
                frequencyArr[j]++;
            }
        }
    }
    console.log(configString(array, frequencyArr));
}
findFrequency(convertedArray);



















function configString(array, frequencyArr) {
    let str = ``;
    let maxIndividual = 0;
    let count = 1;
    let lastIndexOfIndividual = 0;
    frequencyArr.map((item) => {
        if (item == 1) {
            maxIndividual++;
        }
    });
    for (let i = 0; i < frequencyArr.length; ++i) {
        if (frequencyArr[i] == 1 && count < maxIndividual) {
            count++;
        } else if (frequencyArr[i] == 1 && count == maxIndividual) {
            lastIndexOfIndividual = i;
        }
    }
    for (let i = 0; i < frequencyArr.length; ++i) {
        if (frequencyArr[i] == 1 && i < lastIndexOfIndividual) {
            str += `${array[i]}, `;
        } else if (frequencyArr[i] == 1 && i == lastIndexOfIndividual) {
            str += `${array[i]}`;
        }
    }
    return str;
}