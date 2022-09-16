//35. Search Insert Position

var searchInsert = function(nums, target) {
    for ( i = 0; i < nums.length; i++ ) {
        if ( nums[i] < target && nums[i+1] == undefined) {
            return i+1
        } else if (nums[i] < target && nums[i+1] > target) {
            return i+1
        } else if ( nums[i] > target) {
            return i
        } else if ( nums[i] == target) {
            return i
        }
    }
};