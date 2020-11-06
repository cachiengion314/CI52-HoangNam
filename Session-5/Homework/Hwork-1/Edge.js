import Vertice from "./Vertice.js";

export default class Edge {
    constructor(vertice1, vertice2) {
        if (!vertice1 instanceof Vertice || !vertice2 instanceof Vertice) {
            throw new Error(`This thing is not right!`);
        }
        this.verticeHead = vertice1;
        this.verticeTail = vertice2;
    }
}