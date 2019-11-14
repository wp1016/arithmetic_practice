/**
 * 双向链表
 */

class DoublyLinkedNode {
  element: any
  next: any
  prev: any
  constructor(element: any) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  private length = 0
  private head = null
  private tail = null

  /**
   * @description 向双向链表中添加一项
   * @param element
   * @memberof DoublyLinkedList
   */
  append(element: any) {
    let node = new DoublyLinkedNode(element),
      current: { next: DoublyLinkedNode; }
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
    this.tail = node
    this.length++ //更新列表的长度
  }
  /**
   * @description 在任意位置插入元素
   * @param position
   * @param element
   * @returns
   * @memberof DoublyLinkedList
   */
  insert(position: number, element: any) {
    // 检查越界
    if (position >= 0 && position <= length) {
      let node = new DoublyLinkedNode(element),
        current = this.head,
        previous: { next: DoublyLinkedNode; },
        index = 0

      if (position === 0) {
        // 在第一个位置添加
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (position === length) {
        // 最后一项
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.length++
      return true
    } else {
      return false
    }
  }

  /**
   * @description 删除链表中任意位置的元素
   * @param position
   * @returns
   * @memberof DoublyLinkedList
   */
  removeAt(position: number) {
    //检查越界
    if (position > -1 && position < this.length) {
      let current = this.head,
        previous: { next: any; },
        index = 0
      if (position === 0) {
        this.head = current.next
        // 如果只有一项，更新tail
        if (this.length === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = current.next
        current.next.prev = previous
      }
      this.length--;
      return current.element
    } else {
      return null;
    }
  }
}
