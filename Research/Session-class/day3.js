// module
// Để thằng khác sử dụng thì export
// Để sử dụng của thằng khác thì phải import vào
import { helloByVietnamese, helloByJapanese, a } from "./day3-hello.js";
helloByJapanese();
helloByVietnamese();
console.log(`a`, a);
console.log(`------------------------------`);
let array = [1, 1, 1, 3, 3, 3, 2, 4];

let check = {};

for (let i = 0; i < array.length; i++) {
    if (!check[array[i]]) {
        check[array[i]] = 1;
    } else {
        check[array[i]]++;
    }
}
for (let key in check) {
    // console.log(check[key])
    if (check[key] == 1) {
        console.log(key)
    }
}