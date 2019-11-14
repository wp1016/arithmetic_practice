/**
 * 字典
 */

export default class Dictionary {
  items: {}
  constructor() {
    this.items = {}
  }

  /**
   * @description 如果某个键值存在于这个字典中，则返回true，反之则返回false
   * @param key
   * @returns
   * @memberof Dictionary
   */
  has(key: string) {
    return key in this.items
  }

  /**
   * @description 向字典中添加新元素
   * @param key
   * @param value
   * @memberof Dictionary
   */
  set(key: string, value: any) {
    this.items[key] = value
  }

  /**
   * @description 通过使用键值来从字典中移除键值对应的数据值
   * @param key
   * @returns
   * @memberof Dictionary
   */
  delete(key: string) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }

  /**
   * @description 通过键值查找特定的数值并返回
   * @param key
   * @returns
   * @memberof Dictionary
   */
  get(key: string) {
    return this.has(key) ? this.items[key] : undefined
  }

  /**
   * @description 将字典所包含的所有数值以数组形式返回
   * @returns
   * @memberof Dictionary
   */
  values() {
    let values = []
    for (const key in this.items) {
      if (this.has(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }

  /**
   * @description 将这个字典中的所有元素全部删除
   * @memberof Dictionary
   */
  clear() {
    this.items = {}
  }

  /**
   * @description 将字典所包含的所有键名以数组形式返回
   * @returns
   * @memberof Dictionary
   */
  keys() {
    return Object.keys(this.items)
  }

  /**
   * @description 返回字典所包含元素的数量。与数组的length属性类似
   * @returns
   * @memberof Dictionary
   */
  size() {
    return this.keys().length
  }
  /**
   * @description 获取字典中所有项
   * @returns
   * @memberof Dictionary
   */
  getItems() {
    return this.items
  }
}

let dictionary = new Dictionary();
dictionary.set('Gandalf','gandalf@email.com');
dictionary.set('John','johnsnow@email.com');
dictionary.set('Tyrion','tyrion@email.com');
console.log(dictionary.has('Gandalf'));