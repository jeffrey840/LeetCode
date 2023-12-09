// Longest Substring Without Repeating Characters
// Medium
// 30.9K
// 1.3K
// Companies
// Given a string s, find the length of the longest
// substring
// without repeating characters.
//
//
//
//     Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
//
//
//     Constraints:
//
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


//returns a number

function lengthOfLongestSubstring(s: string): number {
    // Base condition
    if (!s) {
        return 0;
    }
    let start = 0;
    let end = 0;
    let maxLength = 0;
    // @ts-ignore
    const uniqueCharacters = new Set();
    // Loop for each character in the string
    while (end < s.length) {
        if (!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);
        } else {
            uniqueCharacters.delete(s[start]);
            start++;
        }
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
//prints 3