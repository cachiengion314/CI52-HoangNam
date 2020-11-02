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
        let hasNode = false;
        if (!this.has(node)) {
            this.checkedNodes.push(node);
            hasNode = true;
        }
        return hasNode;
    }
    show() {
        return this.checkedNodes;
    }
}
class Person {
    constructor(name, age, phoneNumber) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
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

let visited = new CheckedNode();

function depthFirstSearch(person, soicialMap, callback) {
    // let visited = new CheckedNode();
    visited.add(person);
    callback(person);
    for (let friend of soicialMap.get(person)) {
        if (!visited.has(friend)) {
            depthFirstSearch(friend, soicialMap, callback);
        }
    }
}

function breadthFirstSearch(person, soicialMap, callback) {
    let stack = [];
    let trackedPerson = new CheckedNode();
    stack.push(person);

    while (stack.length > 0) {
        let currentPerson = stack.shift();
        if (trackedPerson.add(currentPerson)) {
            callback(currentPerson);
        }

        for (let friend of soicialMap.get(currentPerson)) {
            if (!trackedPerson.has(friend)) {
                stack.push(friend);
            }
        }
    }
}

breadthFirstSearch(trang, soicialMap, (item) => {
    console.log(`callback invocke`, item.name, item.phoneNumber);
});

depthFirstSearch(trang, soicialMap, (person) => {
    console.log(`person name:`, person.name);
});