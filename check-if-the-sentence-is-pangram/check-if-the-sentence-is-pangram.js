/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
        const set = new Set(sentence);
    if (set.size===26)
        return true
    return false
};