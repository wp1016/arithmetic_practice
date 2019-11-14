/**
 * 链表数据结构
 */

class LinkedNode {
  element: any
  next: any
  constructor(element: any) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  private head = null
  private length = 0
  /**
   * @description 向链表中添加元素
   * @param element
   * @memberof LinkedList
   */
  append(element: any) {
    let node = new LinkedNode(element),
      current: { next: LinkedNode }
    if (this.head === null) {
      // 列表中第一个节点
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        // 循环列表，直到找到最后一项
        current = current.next
      }
      // 找到最后一项，将其next赋值为node，建立链接
      current.next = node
    }
    this.length++ //更新列表的长度
  }
  /**
   * @description 移除指定位置上的元素
   * @param position
   * @returns 返回移除的元素
   * @memberof LinkedList
   */
  removeAt(position: number) {
    if (position > -1 && position < this.length) {
      let current = this.head,
        previous: { next: any },
        index = 0
      if (position === 0) {
        // 移除第一项
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        // 将previous 与current的下一项链接起来；跳过current，从而移除它
        previous.next = current.next
      }
      this.length--
      return current.element
    } else {
      return null
    }
  }
  /**
   * @description 在任意位置插入元素
   * @param position
   * @param element
   * @memberof LinkedList
   */
  insert(position: number, element: any) {
    // 检查越界
    if (position >= 0 && position <= length) {
      let node = new LinkedNode(element),
        current = this.head,
        previous: { next: LinkedNode },
        index = 0
      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++
      return true
    } else {
      return false
    }
  }
  /**
   * @description 把LinkedList对象转换成一个字符串。
   * @returns
   * @memberof LinkedList
   */
  toString() {
    let current = this.head,
      string = ''
    while (current) {
      string += current.element + current.next ? 'n' : ''
      current = current.next
    }
    return string
  }

  /**
   * @description 查找linkedList中的项
   * @param element
   * @returns 下标
   * @memberof LinkedList
   */
  indexOf(element: any) {
    let current: any = this.head,
      index = -1
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  /**
   * @description 移除指定项
   * @param element
   * @returns 返回被移除的项
   * @memberof LinkedList
   */
  remove(element: any) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  /**
   * @description 判断列表中是否没有包含元素
   * @returns
   * @memberof LinkedList
   */
  isEmpty() {
    return this.length === 0
  }
  /**
   * @description 返回列表长度
   * @returns
   * @memberof LinkedList
   */
  size() {
    return this.length
  }
  /**
   * @description
   * @returns
   * @memberof LinkedList
   */
  getHead() {
    return this.head
  }
}

let linkedList = new LinkedList()

export default LinkedList