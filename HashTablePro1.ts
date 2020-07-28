/**
 * 分离链接法
 * 如果当前key下已经有值，则将该值转换成链表，并向链表中插入新值
 */

import LinkedList from './LinkedList'

class ValuePair {
  key: string
  value: any
  constructor(key: string, value: any) {
    this.key = key
    this.value = value
  }

  toString() {
    return `[${this.key} - ${this.value}]`
  }
}

export default class HashTablePro1 {
  table: {}
  constructor() {
    this.table = {}
  }

  /**
   * @description 散列函数,给定一个Key参数，我们就能根据组成key的每个字符的ASCII码值的和得到一个数字，用到hash值中。
   * @param key
   * @returns
   * @memberof HashTable
   */
  private loseloseHashCode(key: string) {
    let hash = 0
    for (let index = 0; index < key.length; index++) {
      hash += key.charCodeAt(index)
    }
    return hash % 37
  }

  /**
   * @description 根据给定的key计算出它在表中的位置，然后将value参数添加到用散列函数计算出的对应的位置上。
   * @param key
   * @param value
   * @memberof HashTable
   */
  put(key: string, value: any) {
    let position = this.loseloseHashCode(key)
    if (this.table[position] == undefined) {
      let oldVal = this.table[position]
      this.table[position] = new LinkedList()
      this.table[position].put(new ValuePair(key, oldVal))
    }
    this.table[position].put(new ValuePair(key, value))
  }

  /**
   * @description 从hashTable中移除一个元素
   * @param key
   * @memberof HashTable
   */
  remove(key: string) {
    let position = this.loseloseHashCode(key)
    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead()
      while (current.next) {
        if (current.element.key === key) {
          this.table[position].remove(current.element)
          if (this.table[position].isEmpty()) {
            this.table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      // 检查是否为第一个或最后一个元素
      if (current.element.key === key) {
        this.table[position].remove(current.element)
        if (this.table[position].isEmpty()) {
          this.table[position] = undefined
        }
        return true
      }
    }
    return false
  }

  /**
   * @description 返回根据键值检索到的特定的值
   * @param key
   * @returns
   * @memberof HashTable
   */
  get(key: string) {
    let position = this.loseloseHashCode(key)
    if (this.table[position] !== undefined) {
      //遍历链表寻找键值
      let current = this.table[position].getHead()
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      // 检查元素在链表第一个或最后一个节点的情况
      if (current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }
}
