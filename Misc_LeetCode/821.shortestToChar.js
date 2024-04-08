/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {

	const n = s.length;
	const answer = new Array(n).fill(Infinity)

	for (let i = 0, dist = Infinity;i< n;i++) {
		if(s[i] === c) dist =0;

		else ++dist
		answer[i] =dist
	}

	for(let i = n -1, dist = Infinity;i>=0; --i) {
		if(s[i] === c) dist = 0;
		else ++dist;
		answer[i] = Math.min(answer[i], dist);
	}
	return answer


};

//
// var shortestToChar = function(s, c) {
// 	let index=[],ans=[];
// 	for(let i=0;i<s.length;i++){
// 		if(s[i]===c){
// 			index.push(i);
// 		}
// 	}
// 	// console.log(index);
// 	for(let i=0;i<s.length;i++){
// 		let min=Infinity;
// 		for(let j=0;j<index.length;j++){
// 			min=Math.min(Math.abs(i-index[j]),min);
// 		}
// 		ans.push(min);
// 	}
// 	return ans;
// };