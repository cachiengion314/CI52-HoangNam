import Edge from "./Edge.js";
import Grapth from "./Grapth.js";
import Vertice from "./Vertice.js";

let a = new Vertice(`A`);
let b = new Vertice(`B`);
let c = new Vertice(`C`);
let d = new Vertice(`D`);
let e = new Vertice(`E`);
let ab = new Edge(a, b);
let ad = new Edge(a, d);
let bc = new Edge(b, c);
let cd = new Edge(c, d);
let ea = new Edge(e, a);
let grapth = new Grapth();
grapth.addVertice(a);
grapth.addVertice(b);
grapth.addVertice(c);
grapth.addVertice(d);
grapth.addVertice(e);
grapth.addEdge(ab);
grapth.addEdge(ad);
grapth.addEdge(bc);
grapth.addEdge(cd);
grapth.addEdge(ea);

console.log(grapth.findNearestVertice(a.value));