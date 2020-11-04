console.log(`
Bài 4 (3đ): Nhập vào 1 chuỗi từ bàn phím. Hãy xác định số lượng của từng kí tự có trong chuỗi đó. 
    Ví dụ: 
        Input: aaabb
        Output: (a, 3), (b, 2)
        Input: abcdcba
        Output: (a, 2), (b, 2), (c, 2), (d, 1)
`);

let str = prompt(`Please type a string`);

function findFrequencyIn(str = `abcdcba`) {
    let hashMap = new Map();
    for (let value of str) {
        let item = hashMap.get(value);
        if (item == undefined) {
            item = 1;
        } else {
            item++;
        }
        hashMap.set(value, item++);
    }
    return hashMap;
}

function show(hasMap) {
    let str = ``;
    for (let [key, value] of hasMap) {
        str += ` (${key}, ${value})`;
    }
    return str;
}

console.log(show(findFrequencyIn(str)));