// Two sum

var twoSum = function(nums, target) {
    let storage = {};  
    for ( i = 0; i < nums.length; i++){
        if (target - nums[i] in storage) return [storage[target - nums[i]], i]
        else storage[nums[i]] = i
    }
};