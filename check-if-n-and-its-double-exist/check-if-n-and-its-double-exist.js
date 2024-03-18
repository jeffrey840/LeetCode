function checkIfExist(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // Make sure we're not comparing the same element with itself
            if (i !== j) {
                // Check if arr[i] is double arr[j] or arr[j] is double arr[i]
                if (arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) {
                    console.log(`Found satisfying indices: i = ${i}, j = ${j}, with values arr[i] = ${arr[i]}, arr[j] = ${arr[j]}`);
                    return true;
                }
            }
        }
    }
    // If no such pair is found, return false
    return false;
}