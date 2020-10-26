// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let x = 6;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length && j !== i; j++) {
//         if (arr[i] + arr[j] == x) {
//             console.log(`(${arr[j]},${arr[i]})`)
//         }
//     }
// };

// map() ánh xạ từ một tập sang một tập khác

let nums = `1,2,3,4,5`;

//
let result = nums.split(`,`).map((item) => {
    return Number(item);
})
console.log(result);
//
for (let num of nums) {
    result.push(Number(num));
}

// let arr = [1, 2, 3, 4, 5, 6];
// let result2 = arr.map((item) => {
//     return item ** 2;
// })
// console.log(result2);