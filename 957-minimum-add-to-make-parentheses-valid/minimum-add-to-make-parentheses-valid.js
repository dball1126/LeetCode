/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
   let open = 0, close = 0
   let parenthesesToAdd = 0
   for (let c of s) {
     if (c === ")") {
        if (open <= close) {
            parenthesesToAdd++
        } else {
            close++;
        }
     } else if (c === "(") {
        open++;
     }
   }
   return parenthesesToAdd + (open - close)
};