import Vertice from "./Vertice.js";
import Edge from "./Edge.js";

export default class Grapth {
    vertices;
    edges;
    constructor() {
        this.vertices = [];
        this.edges = [];
    }
    addVertice(vertice) {
        if (vertice instanceof Vertice) {
            this.vertices.push(vertice);
        }
    }
    addEdge(edge) {
        if (edge instanceof Edge) {
            this.edges.push(edge);
        }
    }
    info() {
        console.log(`Vertices:`, this.vertices);
        console.log(`Edges:`, this.edges);
    }
    findNearestVertice(verticeName) {
        let foundEdges = this.edges.filter((edge) => {
            return edge.a.data == verticeName || edge.b.data == verticeName;
        });
        let foundVertices = [];
        foundEdges.forEach((edge) => {
            if (edge.a.data == verticeName) {
                foundVertices.push(edge.b);
            } else if (edge.b.data == verticeName) {
                foundVertices.push(edge.a);
            }
        });
        return foundVertices;
    }
}