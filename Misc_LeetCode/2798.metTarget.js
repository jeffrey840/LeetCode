
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */


function numberOfEmployeesWhoMetTarget(hours, target) {


	let count = ""

	for(let i = 0;i <= hours.length;i++) {

		if(hours[i] >= target ) {
			count++
		}

	}


	return count
}