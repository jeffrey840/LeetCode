/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const foundChars = new Set();
    
    for(const char of sentence.toLowerCase()) {
        if(char >= 'a' && char <= 'z') {
           foundChars.add(char);
            if(foundChars.size === 26) {
                return true;
            }
          }
        }
    return foundChars.size === 26;
    
};