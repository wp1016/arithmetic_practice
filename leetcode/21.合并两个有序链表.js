/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 方法一 递归
  // if(l1 === null) {
  //   return l2
  // } else if (l2 === null) {
  //   return l1
  // } else if (l1.val < l2.val) {
  //   l1.next = mergeTwoLists(l1.next,l2)
  //   return l1
  // } else {
  //   l2.next = mergeTwoLists(l2.next,l1)
  //   return l2
  // }

  // 方法二 迭代
  let prevHead = new ListNode(-1)
  let prev = prevHead

  while(l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    }else if (l1.val > l2.val) {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 === null ? l2 : l1
  return prevHead.next
};


// @lc code=end

