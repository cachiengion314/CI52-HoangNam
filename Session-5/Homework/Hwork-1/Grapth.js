import Vertice from "./Person.js";
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
    findNearestVertice(keyValue) {
        let edgesThatHaveVer = this.edges.filter((edge) => {
            return edge.verticeHead.phoneNumber == keyValue || edge.verticeTail.phoneNumber == keyValue;
        });
        let nearestVertices = new Set();
        edgesThatHaveVer.map(edge => {
            nearestVertices.add(edge.verticeHead);
            nearestVertices.add(edge.verticeTail);
        });
        return Array.from(nearestVertices).filter(ver => {
            return ver.phoneNumber != keyValue;
        });
    }
}