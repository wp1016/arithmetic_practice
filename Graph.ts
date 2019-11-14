/**
 * 图
 */
import Queue from './Queue'
import Stack from './Stack'
import Dictionnary from './Dictionary'

class Graph {
  private vertices: any[] = [] // 我们使用一个数组来存储图中所有顶点的名字，以及一个字典来存储邻接表
  private adjList: Dictionnary = new Dictionnary() // 以及一个字典来存储邻接表,字典将会使用顶点的名字作为键，邻接顶点列表作为值
  private initializeColor() {
    let color = []
    for (let index = 0; index < this.vertices.length; index++) {
      const element = this.vertices[index]
      color[element] = 'white'
    }
    return color
  }
  /**
   * @description 向图中添加顶点
   * @param v
   * @memberof Graph
   */
  addVertex(v: any) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }
  /**
   * @description 这个方法接受两个顶点作为参数。首先，通过将W加入到V的邻接表中，我们添加了一条自顶点V到顶点W的边
   * @param v
   * @param w
   * @memberof Graph
   */
  addEdge(v: any, w: any) {
    this.adjList.get(v).push(w) // 添加一条自顶点V到顶点W的边
    this.adjList.get(w).push(v) // 添加一条自顶点W到顶点V的边
  }

  /**
   * @description 输出图的顶点和其相邻顶点列表
   * @returns
   * @memberof Graph
   */
  toString() {
    let s = ''
    for (let index = 0; index < this.vertices.length; index++) {
      const element = this.vertices[index]
      s += element + ' -> '
      let neighbors = this.adjList.get(element)

      for (let index = 0; index < neighbors.length; index++) {
        const element = neighbors[index]
        s += element + ' '
      }
      s += '\n'
    }
    return s
  }

  /**
   * @description 广度优先搜索
   * @param v
   * @param callback
   * @memberof Graph
   */
  bfs(v, callback) {
    let color = this.initializeColor(),
      queue = new Queue()
    queue.enqueue(v)
    while (!queue.isEmpty()) {
      let u = queue.dequeue()
      let neighbors = this.adjList.get(u)
      color[u] = 'grey'
      for (let index = 0; index < neighbors.length; index++) {
        const w = neighbors[index]
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
      if (callback) {
        callback(u)
      }
    }
  }
  /**
   * @description 寻找最短路径
   * @param v
   * @memberof Graph
   */
  BFS(v: any) {
    let color: any[] = this.initializeColor(),
      queue: Queue = new Queue(),
      d: any = {},
      pred: any = {}
    queue.enqueue(v)
    for (let index = 0; index < this.vertices.length; index++) {
      const key = this.vertices[index]
      d[key] = 0
      pred[key] = null
    }
    while (!queue.isEmpty()) {
      let u = queue.dequeue()
      let neighbors = this.adjList.get(u)
      color[u] = 'grey'
      for (let index = 0; index < neighbors.length; index++) {
        const w = neighbors[index]
        if (color[w] === 'white') {
          color[w] = 'grey'
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }
    return {
      distances: d,
      predecessors: pred,
    }
  }
}

let graph = new Graph()
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
console.log(graph.toString())
// graph.bfs('A', value => {
//   console.log(value)
// })
console.log(JSON.stringify(graph.BFS('A')))
let shortestPathA = graph.BFS(myVertices[0])

let fromVertex = myVertices[0]
for (let index = 1; index < myVertices.length; index++) {
  const element = myVertices[index]
  let toVertex = element,
    path = new Stack()
  for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v)
  }
  path.push(fromVertex);
  let s = path.pop();
  while(!path.isEmpty()){
    s += ' - ' + path.pop();
  }
  console.log(s);
}
