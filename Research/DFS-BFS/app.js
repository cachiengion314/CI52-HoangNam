// node is the key of adjacencyList Map
let smallHashSet = new Set();
const adjacencyList = new Map();
adjacencyList.set(1, new Set([2, 3]));
adjacencyList.set(2, new Set([3, 4]));
adjacencyList.set(3, new Set());
adjacencyList.set(4, new Set([3]));

function depthFirstSearch(node, callback) {
    smallHashSet.add(node);
    callback(node);
    for (let value of adjacencyList.get(node)) {
        if (!smallHashSet.has(value)) {
            depthFirstSearch(value, callback);
        }
    }
}

depthFirstSearch(1, (node) => {
    console.log(`node`, node);
});
console.log(smallHashSet);