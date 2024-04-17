/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let lossCountMap = new Map();
    let winnersSet = new Set()

    for(const [winner, loser] of matches) {
        winnersSet .add(winner);
        if(lossCountMap.has(loser)) {
            lossCountMap.set(loser, lossCountMap.get(loser) + 1);
        } else {
            lossCountMap.set(loser,1)
        }
    }

    const noLoss = [];
    const oneLoss = [];

    for(const winner of winnersSet) {
        if(!lossCountMap.has(winner)){
            noLoss.push(winner);
        }
    }
    for(const [player, count] of lossCountMap) {
        if(count === 1) {
            oneLoss.push(player);
        }
    }
    
noLoss.sort((a,b) => a - b);
oneLoss.sort((a,b) => a - b);

return [noLoss, oneLoss];

};