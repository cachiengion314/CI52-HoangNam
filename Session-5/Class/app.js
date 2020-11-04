import Grapth from "./Grapth.js";
import Vertice from "./Vertice.js";
import Edge from "./Edge.js";

let a = new Vertice(`A`);
let b = new Vertice(`B`);
let c = new Vertice(`C`);
let d = new Vertice(`D`);
let e = new Vertice(`E`);

let ab = new Edge(a, b);
let ac = new Edge(a, c);
let ae = new Edge(a, e);
let bd = new Edge(b, d);

let grapth = new Grapth();

grapth.addVertice(a);
grapth.addVertice(b);
grapth.addVertice(c);
grapth.addVertice(d);
grapth.addVertice(e);

grapth.addEdge(ab);
grapth.addEdge(ac);
grapth.addEdge(ae);
grapth.addEdge(bd);

grapth.info();

console.log(grapth.findNearestVertice(a.data));