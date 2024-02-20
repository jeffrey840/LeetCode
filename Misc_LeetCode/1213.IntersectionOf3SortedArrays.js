/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
function arraysIntersection(arr1,arr2,arr3) {

	for(let i = 0;i <= arr1.length;i++) {
		const set1 = new Set(arr1);
		const set2 = new Set(arr2);
		const set3 = new Set(arr3);
		let storage =  [...set1].filter(num => set2.has(num));
		return  [...storage].filter(num => set3.has(num));



	}

}