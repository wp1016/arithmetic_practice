/**
 * 分而治之算法练习题
 */

/**
 * 生成随机长度整数数组
 */
function genarateArray() {
  let len = Math.floor(Math.random() * 20)
  return new Array(len).fill(0).map(item => item = Math.floor(Math.random() * 1000))
}

/**
 * 1. 编写一格递归计算数组和的函数
 */
 function sum1 (arr) {
   if (arr.length <= 1) {
     return arr[0] | 0
   }
   return arr[0] + sum1(arr.slice(1))
 }

 let arr1 = genarateArray()
 console.log('第一题', arr1, sum1(arr1));

 /**
  * 2. 编写一格递归函数来计算列表中包含的元素数
  * @param {*} arr 
  */
 function getLength (arr) {
  if (arr.length === 0) {
    return 0
  } else {
    return getLength(arr.slice(1)) + 1
  }
 }

 let arr2 = genarateArray()
 console.log('第二题', arr2, getLength(arr2));

/**
 * 找出列表中最大的数字
 */

 function findMax(arr) {
   if (arr.length < 2) {
     return arr[0] | 0
   } else {
     return arr[0] > findMax(arr.slice(1)) ? arr[0] : findMax(arr.slice(1))
   }
 }

 let arr3 = genarateArray()

console.log('第三题', arr3, findMax(arr3));

 /**
  * 4 找出二分查找的基线条件和递归条件
  * 基线条件：数组只包含一个元素，如果相等就表示找到了，如果不相等说明不在数组中
  * 递归条件：每次递归都丢弃到不符合要求的一半
  */