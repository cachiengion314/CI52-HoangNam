import Person from "./Person.js";

export default class Edge {
    constructor(per1, per2) {
        if (!per1 instanceof Person || !per2 instanceof Person) {
            throw new Error(`This thing is not right!`);
        }
        this.verticeHead = per1;
        this.verticeTail = per2;
    }
}