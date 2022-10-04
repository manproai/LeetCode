// 66. Plus One

var plusOne = function(digits) {
    for ( i =1; i <= digits.length; i++) {
        if((digits[digits.length - i] + 1) >= 10) {
            if ((digits.length -i)==0 && digits[digits.length -i] ==9) {
                digits[digits.length -i] = 0
                digits.unshift(0)
            } else {
                digits[digits.length -i] = 0
            }
        }  else {
            digits[digits.length -i] += 1; 
            break
        }
    }
    return digits
    
};