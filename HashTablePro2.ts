/**
 * 线性探查
 */

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

class HashTablePro2 {
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
      this.table[position] = new ValuePair(key, value)
    } else {
      let index = ++position
      while (this.table[index] != undefined) {
        index++
      }
      this.table[index] = new ValuePair(key, value)
    }
  }

  /**
   * @description 从hashTable中移除一个元素
   * @param key
   * @memberof HashTable
   */
  remove(key: string) {
    let position = this.loseloseHashCode(key)
    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        this.table[position] = undefined
      } else {
        let index = ++position
        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++
        }
        if (this.table[index].key === key) {
          this.table[index] = undefined
        }
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
      if (this.table[position].key === key) {
        return this.table[position].value
      } else {
        let index = ++position
        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++
        }
        if (this.table[index].key === key) {
          return this.table[index].value
        }
      }
    }
    return undefined
  }
}

const hashTablePro2 = new HashTablePro2()

hashTablePro2.put('Gandalf', 'gandalf@email.com')
hashTablePro2.put('John', 'johnsnow@email.com')
hashTablePro2.put('Tyrion', 'tyrion@email.com')
hashTablePro2.put('Aaron', 'aaron@email.com')
hashTablePro2.put('Donnie', 'donnie@email.com')
hashTablePro2.put('Ana', 'ana@email.com')
hashTablePro2.put('Jonathan', 'jonathan@email.com')
hashTablePro2.put('Jamie', 'jamie@email.com')
hashTablePro2.put('Sue', 'sue@email.com')

console.log(hashTablePro2.get('Jamie'))
