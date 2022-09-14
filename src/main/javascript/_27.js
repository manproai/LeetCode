// 27. Remove Element

var removeElement = function(nums, val) {
    for ( i = 0; i < nums.length; ) {
        if (nums[i] == val) {
            nums.splice(i, 1);
        } else {
            i++
        }
    }
  return nums.length
};