/**
 * Time & Space: O(1) ...32 bits is constant
 */
var hammingWeight = function(n) {
   count = 0;
   while (n !== 0) {
       count++
       n &= (n-1)
   }
   return count;
};