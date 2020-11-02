import Person from "./Person.js";

class CheckedNode {
    constructor() {
        this.checkedNodes = [];
    }
    has(node) {
        let hasNode = false;
        for (let value of this.checkedNodes) {
            if (node.phoneNumber == value.phoneNumber) {
                hasNode = true;
            }
        }
        return hasNode;
    }
    add(node) {
        if (!this.has(node)) {
            this.checkedNodes.push(node);
        }
    }
    show() {
        return this.checkedNodes;
    }
}

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

// function breadthFirstSearch(person, soicialMap, callback) {
//     let stack = [];
//     let checkedPerson = new CheckedNode();
//     stack.push(person);
//     checkedPerson.add(person);

//     while (stack.length > 0) {
//         let currentPerson = stack.shift();
//         callback(currentPerson);


//         for (let friend of soicialMap.get(currentPerson)) {
//             if (!checkedPerson.has(friend)) {
//                 stack.push(friend);
//                 checkedPerson.add(friend);
//             }
//         }
//     }
//     console.log(checkedPerson);
// }
let phoneNumber = prompt(`Please type your phone number`);

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