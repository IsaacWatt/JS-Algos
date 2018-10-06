# Graphs
Simple visualization of a graph:
```
1 - 4 - 5 - 6           
|   |        \                
2 - 3 -------- 7                
   / \        / \
 11   10 --- 8   9
```
      
### Graphs Defined
A graph is a set of `verticies` and a set of `edges`. We will define edges as a pair (v1, v2), with v1 and v2 being verticies 
in the graph. ie in our graph above, we may have e1 = (1, 2) being the edge connecting the vertex 1 and vertex 2. A graph 
whose pairs are ordered is called a `directed` graph, or a `digraph`. When pairs are ordered, typically a `->` is used to 
visualize the 'flow direction' of the graph. Graphs that are not ordered, are called `unordered`. A `path` is a sequence of 
verticies in a graph `G` such that all the verticies in the path are connected by edges. a `cycle` is a path with at least one 
edge whose first and last verticies are the same. Two verticies are said to be `strongly` connected if there is a path from 
the first vertex to the second, and vice versa. If `G` is a directed graph with all of its verticies being strongly connected, 
then the directed graph is considered `strongly connected`. 

### Our Graph Pieces

#### Verticies
We will begin by defining out verticies in a `vertex` class similar to our `Node` class from trees and linked lists. Our 
`vertex` will contain two pieces of data: one for identifying the vertex called `label`, and one for determining if the vertex has been visited called `wasVisited`. We will store a list of verticies in an array, and will reference them in the `Graph` class by their position in the array.
```
function Vertex(label) {
  this.label = label;
}
```

#### Edges
****tbd


#### The Graph Class
```
function Graph(v) {
  this.verticies = v; 
  this.edges = 0; 
  this.adj = []; 
  for (var i = 0; i < this.verticies; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge; 
  this.prettyPrint = prettyPrint; 
}
```
