/**
 * 二分查找
 * @param {*} nums 
 * @param {*} target 
 */
const searchInsert = (nums, target) => {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >>> 1;
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] > target) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return lo; // 退出循环时 hi比lo小1
  };
  console.log(searchInsert([1,3,5,6],7));