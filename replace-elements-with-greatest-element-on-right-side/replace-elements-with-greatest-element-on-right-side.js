/**
 * @param {number[]} arr
 * @return {number[]}
 */
 function replaceElements(arr) {
    let rightMax = -1; // Initialize rightMax as -1

    // Iterate through the array in reverse order
    for (let i = arr.length - 1; i >= 0; i--) {
      const newMax = Math.max(rightMax, arr[i]); // Find the new maximum
      arr[i] = rightMax; // Update the array element
      rightMax = newMax; // Update rightMax for the next iteration
    }

    return arr;
  }