

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

	console.log("---------lossCountMap---------")
	console.log(lossCountMap)

	console.log("--------winnersSet----------")
	console.log(winnersSet)


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


// Example usage:
const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
console.log(findWinners(matches));
// Expected output: [[1,2,10],[4,5,7,8]]
