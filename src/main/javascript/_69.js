// 69. Sqrt(x)

var mySqrt = function(x) {
    let first = 1;
    let last = x;
    let mid = Math.floor((last + first)/2);
    if(x<2) return x; 
    while(first < last) {
        if((mid*mid)==x) return mid;
        if(mid*mid>x){
            last = mid;
            mid = Math.floor((last + first)/2);
        }
        if(mid*mid<x){
            first = mid+1;
            mid = Math.floor((last + first)/2);
        }
    }
    return first-1;
};