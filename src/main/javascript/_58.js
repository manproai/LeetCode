//58. Length of Last Word

//The dummiest solution ever. The first solution I got without using methods.

var lengthOfLastWord = function(s) {
    let word = "";
    let words = [];
    for ( i = 0; i < s.length; i++ ) {
        if(s[i] !== " ") {
            word += s[i];
        } else if ( word.length > 0 ){
            words.push(word)
            word = ""
        }
    }
    
    if( s[s.length - 1] !== " ") {
        words.push(word)
    }
    
    return words.length ? words[words.length -1].length : 0;
};

// The second solution after going through the methods of String

var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ");
    return words.length ? words[words.length -1].length : 0;
};