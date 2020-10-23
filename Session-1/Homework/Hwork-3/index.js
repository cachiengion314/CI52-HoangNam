// given array [1,9,4,7,5,10]
// log even item with order

let originArray = [1, 9, 4, 7, 5, 10];
let arr = [];
for (let i = 0; i < originArray.length; i++) {
    if (originArray[i] % 2 == 0) {
        arr.push(originArray[i]);
    }
}
for (let i = 0; i < arr.length - 1; i++) {
    for (let ii = i + 1; ii < arr.length; ii++) {
        if (arr[i] >= arr[ii]) {
            [arr[i], arr[ii]] = [arr[ii], arr[i]];
        }
    }
}
console.log(arr);

let arr_1 = originArray.sort(function(a, b) {
    return a - b;
});
let arr_2 = originArray.filter(function(num) {
    return num % 2 == 0;
});

console.log(arr_2);

// 2
let x = 0;
console.log(x == 0);

// b
x = 1;
console.log(x / x - 1);
console.log(!x);

let $no = document.getElementById(`no`); // this $ is dom
let $answers = document.getElementById(`answers`);

// overide event
$no.onmouseenter += function() {

};
// add event
// $no.addEventListener(`mouseenter`, () => {
//     $answers.classList.toggle(`reverse`);
// });
let opacityValue = 100;

function getOpacityStrValue() {
    return opacityValue + `%`;
}

function randomFromAToB(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}
$no.addEventListener(`mouseenter`, () => {
    $no.style.position = `absolute`;
    opacityValue -= 10;
    $no.style.opacity = getOpacityStrValue();
    $no.style.left = `${randomFromAToB(0, screen.width - 150)}px`;
    $no.style.top = `${randomFromAToB(0, screen.height - 80)}px`;
});