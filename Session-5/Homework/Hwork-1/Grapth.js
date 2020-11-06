import Vertice from "./Vertice.js";
import Edge from "./Edge.js";

export default class Grapth {
    constructor() {
        this.vertices = [];
        this.edges = [];
    }
    addEdge(edge) {
        if (edge instanceof Edge) {
            this.edges.push(edge);
        }
    }
    addVertice(vertice) {
        if (vertice instanceof Vertice) {
            this.vertices.push(vertice);
        }
    }
    findNearestVertice(verticeValue) {
        let edgesThatHaveVer = this.edges.filter((edge) => {
            return edge.verticeHead.value == verticeValue || edge.verticeTail.value == verticeValue;
        });
        let nearestVertices = new Set();
        edgesThatHaveVer.map(edge => {
            nearestVertices.add(edge.verticeHead);
            nearestVertices.add(edge.verticeTail);
        });
        return Array.from(nearestVertices).filter(ver => {
            return ver.value != verticeValue;
        });
    }
}