//it was hard to pass all the cases until I got the idea of stacks
//Resource to recap https://javascript.info/recursion

var isValid = function(s) {
    const stack = [];
     
     for (i = 0; i < s.length; i++) {
         let lastParenthesis = stack[stack.length-1]
         
         if(s[i] == "(" || s[i] == "[" || s[i] == "{") {
             stack.push(s[i])
         } else if(s[i] == ")" && lastParenthesis == "(" ) {
             stack.pop()
         } else if(s[i] == "}" && lastParenthesis == "{" ) {
             stack.pop()
         } else if(s[i] == "]" && lastParenthesis == "[" ) {
             stack.pop()
         } else {
             return false
         }
     }
     return stack.length ? false : true
 };