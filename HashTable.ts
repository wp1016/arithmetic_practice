/**
 * 散列表
 */

class HashTable {
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
    console.log(position + '-' + key)
    this.table[position] = value
  }

  /**
   * @description 从hashTable中移除一个元素
   * @param key
   * @memberof HashTable
   */
  remove(key: string) {
    this.table[this.loseloseHashCode(key)] = undefined
  }

  /**
   * @description 返回根据键值检索到的特定的值
   * @param key
   * @returns
   * @memberof HashTable
   */
  get(key: string) {
    return this.table[this.loseloseHashCode(key)]
  }
}

const hash = new HashTable()
hash.put('Gandalf', 'gandalf@wmail.com')
hash.put('John', 'johnsnow@wmail.com')
hash.put('Tyrion', 'tyrion@wmail.com')

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));

export default HashTable