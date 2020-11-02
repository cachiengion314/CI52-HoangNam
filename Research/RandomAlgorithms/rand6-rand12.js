console.log(`
Given a function rand6() that returns random numbers from 1 to 6 with equal probability, 
implement one-liner function rand12() using rand6() that returns random numbers 
from 1 to 12 with equal probability. Solution should minimize the number of calls to rand6() method. 
Use of any other library function and floating point arithmetic are not allowed.
`);

function findDublicateIn(array) {
    let hashMap = {};
    for (let value of array) {
        if (hashMap[value] == undefined) {
            hashMap[value] = 1;
        } else {
            hashMap[value]++;
        }
    }
    return hashMap;
}

function rand6() {
    return Math.floor(Math.random() * 6) + 1;
}

function rand2() {
    return Math.floor(Math.random() * 2) + 1;
}

function testFrequency(callback) {
    let array = [];
    for (let i = 0; i < 1000; ++i) {
        array.push(callback());
    }
    console.log(findDublicateIn(array));
}

function rand12() {
    if (rand6() <= 3) { return rand6(); } else { return rand6() + 6; };
}

function rand3() {

}

// for (let i = 0; i < 10; ++i) {
//     testFrequency(rand7);
// }