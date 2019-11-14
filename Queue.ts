/**
 * 队列
 */

export default class Queue {
  items: any[]
  constructor() {
    this.items = []
  }
  enqueue(element:any) {
    this.items.push(element)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
}
