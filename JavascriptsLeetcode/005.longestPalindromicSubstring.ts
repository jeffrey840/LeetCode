// Given a string s, return the longest
// palindromic
//
// substring
// in s.

//     Example 1:
//
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
//     Example 2:
//
// Input: s = "cbbd"
// Output: "bb"
//
//
// Constraints:
//
//     1 <= s.length <= 1000
// s consist of only digits and English letters.

//returns string
// https://en.wikipedia.org/wiki/Longest_palindromic_substring#Manacher's_algorithm




function longestPalindrome(s: string) : string {
    let longestPal = '';

    var getLongestPalindrome = function (leftPosition, rightPosition) {
        // While there is space to expand, and the expanded strings match
        while (
            leftPosition >= 0 &&
            rightPosition < s.length &&
            s[leftPosition] === s[rightPosition]
            ) {
            // Expand in each direction.
            leftPosition--;
            rightPosition++;
        }

        // Store the longest palindrom (if it's the longest one found so far)
        if (rightPosition - leftPosition > longestPal.length) {
            longestPal = s.slice(leftPosition + 1, rightPosition);
        }
    };

    // Loop through the letters
    for (let i = 0; i < s.length; i++) {
        // Find the longest odd palendrome
        getLongestPalindrome(i, i + 1);

        // Find the longest even palendrome
        getLongestPalindrome(i, i);

        // Check if a longer palindrome cannot be found
        if ((s.length - i) * 2 < longestPal.length) {
            // Break out to avoid unnecessary computation
            break;
        }
    }

    return longestPal;
}


