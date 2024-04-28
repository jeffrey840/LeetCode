/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
let seenNumbers = new Set()

while(n !== 1 && !seenNumbers.has(n) ) {

seenNumbers.add(n);
n = sumOfSquares(n);
}

return n === 1;

function sumOfSquares(number) {
    let sum = 0;
    while(number > 0) {
        let digit = number % 10;
        sum += digit * digit;
        number = Math.floor(number / 10)
    }
    return sum
}


};