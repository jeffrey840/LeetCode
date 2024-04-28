/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false; // If strings are of different lengths, they can't be isomorphic

    let mapST = {};  // Maps characters from s to t
    let mapTS = {};  // Maps characters from t to s

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check if the current character of s is already mapped to a different character in t
        if (mapST[charS] !== undefined) {
            if (mapST[charS] !== charT) return false; // If it's mapped to a different character, return false
        } else {
            mapST[charS] = charT; // Map charS to charT
        }

        // Check if the current character of t is already mapped to a different character in s
        if (mapTS[charT] !== undefined) {
            if (mapTS[charT] !== charS) return false; // If it's mapped to a different character, return false
        } else {
            mapTS[charT] = charS; // Map charT to charS
        }
    }

    return true; // If all checks pass, strings are isomorphic
}

