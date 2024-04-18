/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let count = 0;

    for(i in stones) {
        if(jewels.includes(stones[i])) {
            count +=1
            
        }

    }
    return count 
};