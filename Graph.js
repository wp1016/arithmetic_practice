"use strict";
exports.__esModule = true;
/**
 * 图
 */
var Queue_1 = require("./Queue");
var Stack_1 = require("./Stack");
var Dictionary_1 = require("./Dictionary");
var Graph = /** @class */ (function () {
    function Graph() {
        this.vertices = []; // 我们使用一个数组来存储图中所有顶点的名字，以及一个字典来存储邻接表
        this.adjList = new Dictionary_1["default"](); // 以及一个字典来存储邻接表,字典将会使用顶点的名字作为键，邻接顶点列表作为值
    }
    Graph.prototype.initializeColor = function () {
        var color = [];
        for (var index = 0; index < this.vertices.length; index++) {
            var element = this.vertices[index];
            color[element] = 'white';
        }
        return color;
    };
    /**
     * @description 向图中添加顶点
     * @param v
     * @memberof Graph
     */
    Graph.prototype.addVertex = function (v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    };
    /**
     * @description 这个方法接受两个顶点作为参数。首先，通过将W加入到V的邻接表中，我们添加了一条自顶点V到顶点W的边
     * @param v
     * @param w
     * @memberof Graph
     */
    Graph.prototype.addEdge = function (v, w) {
        this.adjList.get(v).push(w); // 添加一条自顶点V到顶点W的边
        this.adjList.get(w).push(v); // 添加一条自顶点W到顶点V的边
    };
    /**
     * @description 输出图的顶点和其相邻顶点列表
     * @returns
     * @memberof Graph
     */
    Graph.prototype.toString = function () {
        var s = '';
        for (var index = 0; index < this.vertices.length; index++) {
            var element = this.vertices[index];
            s += element + ' -> ';
            var neighbors = this.adjList.get(element);
            for (var index_1 = 0; index_1 < neighbors.length; index_1++) {
                var element_1 = neighbors[index_1];
                s += element_1 + ' ';
            }
            s += '\n';
        }
        return s;
    };
    /**
     * @description 广度优先搜索
     * @param v
     * @param callback
     * @memberof Graph
     */
    Graph.prototype.bfs = function (v, callback) {
        var color = this.initializeColor(), queue = new Queue_1["default"]();
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for (var index = 0; index < neighbors.length; index++) {
                var w = neighbors[index];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    };
    /**
     * @description 寻找最短路径
     * @param v
     * @memberof Graph
     */
    Graph.prototype.BFS = function (v) {
        var color = this.initializeColor(), queue = new Queue_1["default"](), d = {}, pred = {};
        queue.enqueue(v);
        for (var index = 0; index < this.vertices.length; index++) {
            var key = this.vertices[index];
            d[key] = 0;
            pred[key] = null;
        }
        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for (var index = 0; index < neighbors.length; index++) {
                var w = neighbors[index];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred
        };
    };
    return Graph;
}());
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());
// graph.bfs('A', value => {
//   console.log(value)
// })
console.log(JSON.stringify(graph.BFS('A')));
var shortestPathA = graph.BFS(myVertices[0]);
var fromVertex = myVertices[0];
for (var index = 1; index < myVertices.length; index++) {
    var element = myVertices[index];
    var toVertex = element, path = new Stack_1["default"]();
    for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
        path.push(v);
    }
    path.push(fromVertex);
    var s = path.pop();
    while (!path.isEmpty()) {
        s += ' - ' + path.pop();
    }
    console.log(s);
}
