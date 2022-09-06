//Longest Common Prefix

var longestCommonPrefix = function(strs) {
    let result = new Set();
    let string = "";
    for (i = 0; i < strs[0].length; i++) {
        for (j = 0; j < strs.length; j++) {
            if (strs[0][i]==strs[j][i]) {
                result.add(true)
            } else {
                result.add(false)
            }
        }
        if (!result.has(false)) {
            string += strs[0][i]
        }
    }
    return string;
};