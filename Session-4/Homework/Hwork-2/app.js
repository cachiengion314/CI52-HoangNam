import Person from "./Person.js";

class CheckedNode {
    constructor() {
        this.checkedNodes = [];
    }
    has(node) {
        let hasNode = false;
        if (this.checkedNodes.includes(node)) {
            hasNode = true;
        }
        return hasNode;
    }
    add(node) {
        if (!this.checkedNodes.includes(node)) {
            this.checkedNodes.push(node);
        }
    }
    show() {
        return this.checkedNodes;
    }
}

let trang = new Person(`Nguyen Minh Trang`, 23, `0978155603`);
let duc = new Person(`Doan Nguyen Duc`, 27, `0938657673`);
let trung = new Person(`Nguyen Duc Trung`, 25, `0978155603`);
let mi = new Person(`Tran Ha Mi`, 24, `0874175703`);
let tung = new Person(`Hoang Bach Tung`, 21, `0176165602`);
let minh = new Person(`Do Tien Minh`, 29, `0978253624`);
let khoan = new Person(`Phung Khac Khoan`, 33, `0874145203`);

let soicialMap = new Map();
soicialMap.set(trang, [duc, trung]);
soicialMap.set(duc, [trang, mi, tung]);
soicialMap.set(trung, [trang, tung]);
soicialMap.set(tung, [duc, trung, khoan]);
soicialMap.set(mi, [duc, khoan]);
soicialMap.set(khoan, [mi, tung]);
soicialMap.set(minh, [tung]);

function breadthFirstSearch(person, soicialMap, callback) {
    let stack = [];
    let checkedPerson = new CheckedNode();
    stack.push(person);

    while (stack.length > 0) {
        let currentPerson = stack.shift();
        callback(currentPerson);
        checkedPerson.add(currentPerson);

        for (let friend of soicialMap.get(currentPerson)) {
            if (!checkedPerson.has(friend)) {
                stack.push(friend);
            }
        }
    }
}

breadthFirstSearch(trang, soicialMap, (person) => {
    console.log(`person:`, person);
});