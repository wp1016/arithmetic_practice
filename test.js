// /**
//  * 二分查找
//  * @param {*} nums 
//  * @param {*} target 
//  */
// const searchInsert = (nums, target) => {
//     let lo = 0;
//     let hi = nums.length - 1;
//     while (lo <= hi) {
//       const mid = (lo + hi) >>> 1;
//       if (nums[mid] == target) {
//         return mid;
//       } else if (nums[mid] > target) {
//         hi = mid - 1;
//       } else {
//         lo = mid + 1;
//       }
//     }
//     return lo; // 退出循环时 hi比lo小1
//   };
//   console.log(searchInsert([1,3,5,6],7));

// 题目 给定有序数组 [1,2,3,4,6,8,9,10]，合并连续的数值
// 输出 ['1-4',6,'8-10']

//   let arr = [1, 2, 3, 4, 6, 8, 9, 10, 12]
  // function merge(arr) {
  //   let res = []
  //   let hash = {start:0,end:0}
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i + 1] - arr[i] === 1) {
  //       hash.end = i + 1
  //     } else {
  //       if (hash.start === hash.end) {
  //         res.push (arr[hash.start])
  //       } else {
  //         res.push(`${arr[hash.start]}-${arr[hash.end]}`)
  //       }
  //       hash.start = i + 1
  //       hash.end = i + 1
  //     } 
  //   }
  //   return res
  // }

  /**
   * 广度优先搜索
   * @param {*} pRoot 
   */
  function printTree(pRoot){
      // write code here
      let arr = []
      let result = []
      if (!pRoot){
          return result
      }
      arr.push([pRoot])
      while(arr.length){
        let nodes = arr.shift()
        let children = []
        let res = []
        for (let i = 0; i < nodes.length; i++) {
            let childNode = nodes[i]
            res.push(childNode.val)
            if (childNode.left){
                children.push(childNode.left)
            }
            if (childNode.right) {
                children.push(childNode.right)
            }
        }
        result.push(res)
        children.length && arr.push(children)
    }
    return result
  }
  
  let tree = {
      val: 1,
      left: {
          val: 2,
          left: {
              val: 3,
              left: null,
              right: null
          },
          right: {
              val: 3,
              left: null,
              right: null
          }
      },
      right: {
          val: 2,
          left: {
              val: 3,
              left: null,
              right: null
          },
          right: {
              val: 3,
              left: null,
              right: null
          }
      }
  }
  console.log('===========广度优先搜索==========');
  console.log(printTree(tree));

/**
 * 深拷贝
 * deepClone
 */

 function deepClone (obj, map = new WeakMap()) {
     if (obj instanceof RegExp) return new RegExp(obj)
     if (obj instanceof Date) return new Date(obj)

     if (obj === null || typeof obj !== 'object') return obj

     if (map.has(obj)) {
       return map.get(obj)
     }
     let t = new obj.constructor()
     map.set(obj, t)
     for (let key in obj) {
       if (obj.hasOwnProperty(key)) {
         t[key] = deepClone(obj[key], map)
       }
     }
     return t
 }

//测试用例
let obj = {
  a: 1,
  b: {
      c: 2,
      d: 3
  },
  d: new RegExp(/^\s+|\s$/g),
  e: [1,3,5]
}

let clone_obj = deepClone(obj)
obj.b.c = 4
obj.d = /^\s|[0-9]+$/g
obj.e.push(6)
console.log('===========深拷贝测试用例============');
console.log(clone_obj)
console.log(obj)


// console.log(x)
// var x = 9
// function x () {
//     console.log(x);
// }
// x()
// TypeError: x is not a function
// console.log(1)
// async function a() {
//   await fn1()
//   console.log(2)
// }
// function fn1 () {
//   console.log(4)
// }
// console.log(3)
// a()

console.log(1)
async function a() {
  await fn1()
  console.log(2)
}
function fn1 () {
  console.log(4)
}
a()
console.log(3)

function delStr (str) {
    let hash = {}

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (hash[element]) {
            hash[element]++
        } else {
            hash[element] = 1
        }
    }
    let text = str
    let minCount = Math.min(...Object.values(hash))

    for (const [key, value] of Object.entries(hash)) {
        if (value === minCount) {
            let reg = new RegExp(key, 'g')
            text = text.replace(reg, '')
        }
    }
    return text
}

let str = 'asdfasdfasdfzx'
console.log('=======删除字符串中出现次数最少的字符=======');
console.log(delStr(str));

const fs = require('fs')
const { resolve } = require('path')
function myPromise (fn) {
    return function () {
        let arg = arguments
        return new Promise((resolve, reject) => {
            fn(arg, function (err, data) {
                if (err) {
                    reject(err)
                    return
                }
                    resolve(data)
            })
        })
    }
}

Array.prototype.myReduce = function (fn, initValue) {
    let index = 0;
    let result = 0


    if (typeof initValue === 'undefined') {
        result = this[index]
        index++
    }

    while (index < arr.length) {
        result = fn(result, arr[index], index, this)
        index++
    }

    return result
}

let arr = [1,2,3]
console.log(arr.myReduce(function (prev, cur, index, array){
    console.log(index);
    return prev + cur
}, 0));

console.log("========myCall========");
// 实现call
Function.prototype.mycall = function () {
    let [thisArg, ...args] = [...arguments]
    thisArg = Object(thisArg) || window
    let fn = Symbol()
    thisArg[fn] = this
    let result = thisArg[fn](...args)
    delete thisArg[fn]
    return result
}
// 实现apply
Function.prototype.myapply = function () {
    let [thisArg, args] = [...arguments];
    thisArg = Object(thisArg)
    let fn = Symbol()
    thisArg[fn] = this;
    let result = thisArg[fn](...args);
    delete thisArg.fn;
    return result;
}

//测试用例
let cc = {
    a: 1
}

function demo(x1, x2) {
    console.log(typeof this, this.a, this)
    console.log(x1, x2)
}
demo.apply(cc, [2, 3])
demo.myapply(cc, [2, 3])
demo.call(cc,33,44)
demo.mycall(cc,33,44)


/**
 * setInterval机制,期望 每隔100ms输出一个0,期望输出10个0 实际上只输出了两个0
 */
// console.log("========setInterval========");
// console.time('耗时')
// var timer = setInterval(() => {
//     for (let i = 0; i < 1100000000; i++) { // 900ms左右
//     }
//     console.log(0)
//   }, 100);


// setTimeout(() => {
//     console.log('1s了')
//     clearInterval(timer)
//     console.timeEnd('耗时') // 耗时: 1955.52490234375ms（打印结果不固定）
// }, 1000);


class LazyMan {
    constructor (name) {
        this.tasks = []
        let task = () => {
            console.log(`i'm ${name}`);
            this.next()
        }
        this.tasks.push(task)

        setTimeout(() => {
            this.next()
        },0)
    }

    next () {
        let task = this.tasks.shift()
        task && task()
    }

    sleep(wait) {
        let task = () => {
            new Promise((resolve, reject) => {
                setTimeout(()=>{
                    console.log(`i'm wakeup ${wait}`);
                    this.next()
                },wait)
            })
        }
        this.tasks.push(task)
        return this
    }

    eat (x) {
        let task = () => new Promise((resolve, reject) => {
            console.log(`i'm eatting ${x}`);
            this.next()
        })
        this.tasks.push(task)
        return this
    }
}
console.log('==========lazyMan=========');
new LazyMan('mike').sleep(2000).eat('x').sleep(2000).sleep(3000).eat('y')




console.log('script start');

async function async1 () {
    console.log('async1 start');
    await async2()
    console.log('async1 end');
}

async function async2 () {
    console.log('async2');
}

setTimeout(function(){
    console.log('timeout');
},0)
async1()
new Promise((resolve, reject) => {
    console.log('promise1');
    resolve()
}).then(() => {
    console.log('promise2');
})

console.log('script end');

new Promise((resolve, reject) => {
    resolve(1)
}).then(console.log(2)).then(res => {
    console.log(res);
})

