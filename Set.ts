/**
 * 集合
 */

class Sets {
  items: Object
  constructor() {
    this.items = {}
  }

  /**
   * @description 判断集合中是否存在元素
   * @param value
   * @returns
   * @memberof Sets
   */
  has(value: string) {
    return this.items.hasOwnProperty(value)
  }

  /**
   * @description 向集合中添加元素,如果不存在，就把value添加到集合中，返回true，表示添加了这个值。如果集合中已经有这个值，就返回false，标识没有添加它
   * @param value
   * @returns
   * @memberof Sets
   */
  add(value: string) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }

  /**
   * @description 删除一个元素
   * @param value
   * @returns
   * @memberof Sets
   */
  remove(value) {
    if (this.has(value)) {
      delete this.items[value]
      return true
    }
    return false
  }

  /**
   * @description 清空集合
   * @memberof Sets
   */
  clear() {
    this.items = {}
  }

  /**
   * @description 返回集合的长度
   * @returns
   * @memberof Sets
   */
  size() {
    return Object.keys(this.items).length
  }

  /**
   * @description 提取items对象的所有属性，以数组的形式返回:
   * @returns
   * @memberof Sets
   */
  values() {
    let values = []
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        const element = this.items[key]
        values.push(element)
      }
    }
    return values
  }

  /**
   * @description 获取两个集合的并集
   * @param otherSet
   * @returns
   * @memberof Sets
   */
  union(otherSet: Sets) {
    let unionSet = new Sets()
    let values = this.values()
    for (let index = 0; index < values.length; index++) {
      unionSet.add(values[index])
    }

    values = otherSet.values()
    for (let index = 0; index < values.length; index++) {
      unionSet.add(values[index])
    }
    return unionSet
  }

  /**
   * @description 获取两个集合的交集
   * @param otherSet
   * @returns
   * @memberof Sets
   */
  intersection(otherSet: Sets) {
    let intersectionSet = new Sets()
    let values = this.values()
    for (let index = 0; index < values.length; index++) {
      if (otherSet.has(values[index])) {
        intersectionSet.add(values[index])
      }
    }
    return intersectionSet
  }
  /**
   * @description 获取两个集合的差集
   * @param otherSet
   * @returns
   * @memberof Sets
   */
  difference(otherSet: Sets) {
    let differenceSet = new Set()
    let values = this.values()
    for (let index = 0; index < values.length; index++) {
      if (!otherSet.has(values[index])) {
        differenceSet.add(values[index])
      }
    }
    return differenceSet
  }
  /**
   * @description 判断一个集合是否是另一个集合的子集
   * @param otherSet
   * @returns
   * @memberof Sets
   */
  subset(otherSet: Sets) {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      let values = this.values()
      for (let index = 0; index < values.length; index++) {
        const element = values[index]
        if (!otherSet.has(element)) {
          return false
        }
      }
      return true
    }
  }
}
