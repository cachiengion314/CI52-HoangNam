class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkList {
    constructor(head = null) {
        this.head = head;
    }
    pushNode(node) {
        let lastNode = this.getLastNode();
        lastNode.next = node;
    }
    unshiftNode(node) {
        node.next = this.getFirstNode();
        this.head = node;
    }
    countAllNodes() {
        let count = 0;
        let node = this.head;
        while (node != null) {
            count++;
            node = node.next;
        }
        return count;
    }
    clearAllNodes() {
        this.head = null;
    }
    getLastNode() {
        let lastNode = this.head;
        while (lastNode != null) {
            lastNode = lastNode.next;
            if (lastNode.next == null) {
                return lastNode;
            }
        }
    }
    getFirstNode() {
        return this.head;
    }
    transversalAllNodes() {
        let node = this.head;
        let allNodes = [];
        while (node != null) {
            // let nodeObject = { nodeName: node.data, nextNode: node.next.data }
            allNodes.push(node.data);
            node = node.next;
        }
        return allNodes;
    }
}
let node0 = new Node(4);
let node1 = new Node(1);
let node2 = new Node(8);
let node3 = new Node(5);
let node4 = new Node(0);

node0.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

let numberLinkList = new LinkList(node0);

console.log(numberLinkList);
console.log(`count all node: `, numberLinkList.countAllNodes());
console.log(`all nodes data:`, numberLinkList.transversalAllNodes());
numberLinkList.unshiftNode(new Node(100));
console.log(`all nodes value after unshifnode with data: 100`, numberLinkList.transversalAllNodes());
numberLinkList.pushNode(new Node(101));
console.log(`all nodes value after push node with data: 101`, numberLinkList.transversalAllNodes());
console.log(`the last node:`, numberLinkList.getLastNode());