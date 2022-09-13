// 26. Remove Duplicates from Sorted Array
//The first dummy way without research


var removeDuplicates = function(nums) {
    
    for (i = 0; i < nums.length;  ) {
        if(nums[i] == nums[i+1]) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    return nums.length
    
};