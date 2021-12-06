/**
 * 实现一个对数组的快速排序
 */

 /**
  * 生成一个随机排序的数组
  * @returns arr  数组
  */
 function genarate(len) {
    let array = new Array(2 * len).fill(0).map(item => item = Math.floor(Math.random()* len))
    return [...new Set(array)]
 }

 /**
  * 二分法实现快速排序
  * @param {*} array 
  */
 function quickSort(array) {
     if (array.length <= 1) {
         return array
     } else {
         let midIndex = Math.floor((array.length - 1) / 2)
         const key = array[midIndex];
         const leftArray = []
         const rightArray = []
         for (let index = 0; index < array.length; index++) {
            const element = array[index]
             if (element > key) {
                 rightArray.push(element)
             } else if (element < key) {
                 leftArray.push(element)
             }
         }
         return quickSort(leftArray).concat(key,quickSort(rightArray))
     }
 }
 let arr = genarate(10000000)
 console.time('quickSort')
 console.log(arr, quickSort(arr));
 console.timeEnd('quickSort')