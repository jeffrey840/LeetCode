/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(list1, list2) {
    let map = {};  // Using an object as a substitute for HashMap
    for (let i = 0; i < list1.length; i++) {
        map[list1[i]] = i;  // Store index of each restaurant from list1
    }

    let res = [];  // Array to store the result
    let min_sum = Infinity;  // Use Infinity as a substitute for Integer.MAX_VALUE
    let sum;

    for (let j = 0; j < list2.length && j <= min_sum; j++) {
        if (map.hasOwnProperty(list2[j])) {  // Check if list2's restaurant is in map
            sum = j + map[list2[j]];  // Calculate the sum of indices
            if (sum < min_sum) {
                res = [];  // Clear the array if a new minimum sum is found
                res.push(list2[j]);  // Add the current restaurant to the result
                min_sum = sum;  // Update the minimum sum
            } else if (sum === min_sum) {
                res.push(list2[j]);  // If the sum is equal to the current minimum, add to results
            }
        }
    }

    return res;  // Return the result array
}