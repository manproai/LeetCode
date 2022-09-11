// Palindrome Number

//First dummy way that came to my mind
var isPalindrome = function(x) {
    x = x+""
    for (i=0; i < x.length/2; i++ ) {
        if(x[i] !== x[x.length-i-1]){
            return false
        }
    }
    return true
};