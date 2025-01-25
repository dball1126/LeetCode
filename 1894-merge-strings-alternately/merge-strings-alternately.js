/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedStr = "", i = 0, j = 0;
    while (i < word1.length || j < word2.length) {
        if (i >= word1.length) return mergedStr + word2.slice(j);
        if (j >= word2.length) return mergedStr + word1.slice(i);

        if (i <= j) {
            mergedStr += word1[i];
            i++;
        } else {
            mergedStr += word2[j];
            j++;
        }
    }
    return mergedStr;
};