// Roman to Integer

var romanToInt = function(s) {
    let total = 0;
     let toNumMap = new Map();
     toNumMap.set("I", 1); 
     toNumMap.set("V", 5);
     toNumMap.set("X", 10);
     toNumMap.set("L", 50);
     toNumMap.set("C", 100);
     toNumMap.set("D", 500);
     toNumMap.set("M", 1000);
 
     
     for (i = 0 ; i < s.length ; i++) {
         if (toNumMap.get(s[i]) < toNumMap.get(s[i+1])) {
             total -= toNumMap.get(s[i])
         } else {
             total += toNumMap.get(s[i]);
         }
     }
     return total;
 };