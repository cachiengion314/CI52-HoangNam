import Person from "./Person.js";

let trang = new Person(`Nguyen Minh Trang`, 23, `0978155603`);
let duc = new Person(`Doan Nguyen Duc`, 27, `0878155603`);
let trung = new Person(`Nguyen Duc Trung`, 25, `0778155603`);
let mi = new Person(`Tran Ha Mi`, 24, `0678155603`);
let tung = new Person(`Hoang Bach Tung`, 21, `0578155603`);
let minh = new Person(`Do Tien Minh`, 29, `0478155603`);
let khoan = new Person(`Phung Khac Khoan`, 33, `0378155603`);

let soicialMap = new Map();
soicialMap.set(trang, [duc, trung]);
soicialMap.set(duc, [trang, mi, tung]);
soicialMap.set(trung, [trang, tung]);
soicialMap.set(tung, [duc, trung, khoan, minh]);
soicialMap.set(mi, [duc, khoan]);
soicialMap.set(khoan, [mi, tung]);
soicialMap.set(minh, [tung]);

let str = ` `;
for (let [key, value] of soicialMap) {
    str += `${key.phoneNumber} \n`;
}

let phoneNumber = prompt(`Please type your phone number in this list ${str}`);

function findPerson(phoneNumber) {
    let person = null;
    for (let [key, value] of soicialMap) {
        if (key.phoneNumber == phoneNumber) {
            person = key;
        }
    }
    return person;
}

console.log(soicialMap.get(findPerson(phoneNumber)));