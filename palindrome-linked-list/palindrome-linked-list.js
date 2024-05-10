/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    let currentNode = head;
    
    // Traverse the linked list and store each value in an array.
    while (currentNode !== null) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    
    // Check if the array is a palindrome.
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false; // The list is not a palindrome
        }
        start++;
        end--;
    }
    
    return true; // The list is a palindrome
};



