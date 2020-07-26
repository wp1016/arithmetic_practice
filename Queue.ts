/**
 * 队列
 */

export default class Queue {
  items: any[]
  constructor() {
    this.items = []
  }
  /**
   * 入队列
   * @param element 需要添加的元素
   */
  enqueue(element:any) {
    this.items.push(element)
  }
  /**
   * 出队列
   */
  dequeue() {
    return this.items.shift()
  }
  /**
   * 获取队列头
   */
  front() {
    return this.items[0]
  }
  /**
   * 判断队列是否为空
   */
  isEmpty() {
    return this.items.length === 0
  }
  /**
   * 获取队列长度
   */
  size() {
    return this.items.length
  }
}
