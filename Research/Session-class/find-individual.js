console.log(`3.
Bài 3 (Thuật toán): Nhập vào 1 mảng, hãy in ra những phần tử không trùng lặp trong mảng đó?
Ví dụ: 
    [1, 1, 2, 3, 3, 4, 5, 5] --> in ra 2, 4
    [-2, 2, 4, 6, -2, 10] --> in ra 2, 4, 6, 10
`);

function findIndividualInArray(array = [-2, 2, 4, 6, -2, 10]) {
    let hashMap = {};
    for (let value of array) {
        if (hashMap[value] != undefined) {
            hashMap[value]++;
        } else {
            hashMap[value] = 1;
        }
    }
    console.log(hashMap);
}
findIndividualInArray();

function findIndividualInArray2(array = [-2, 2, 4, 6, -2, 10]) {
    array.sort((a, b) => {
        return a - b;
    });
    let frequencyArr = [];
    for (let i = 1; i < array.length - 1; ++i) {
        if (array[i] != array[i + 1] && array[i] != array[i - 1]) {
            frequencyArr.push(array[i]);
        }
    }
    console.log(...frequencyArr);
}
findIndividualInArray2();