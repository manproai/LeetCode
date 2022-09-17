//58. Length of Last Word

//The dummiest solution ever. The first solution I got.

var lengthOfLastWord = function(s) {
    let word = "";
    let words = [];
    let from = 0;
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
    
    return words[words.length -1].length;
};