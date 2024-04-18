/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	let groups = new Map();

	for(const s of strs) {
		let key = s.split('').sort().join('');
		if(!groups.has(key)) {
			groups.set(key, []);
		}
		groups.get(key).push(s);
	}

	let ans = [];
	for(const group of groups.values()) {
		ans.push(group);
	}
	return ans;


};