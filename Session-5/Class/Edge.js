import Vertice from "./Vertice.js";
export default class Edge {
    a;
    b;
    constructor(a, b) {
        if (!a instanceof Vertice || !b instanceof Vertice) {
            throw new Error(`a, b is not an instance of Vertice`);
        }
        this.a = a;
        this.b = b;
    }

}