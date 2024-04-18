/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let char of ransomNote) {
        if (!magazine.includes(char)) {
            return false;
        } else {
            magazine = magazine.replace(char, '');
        }
    }
    return true;

};