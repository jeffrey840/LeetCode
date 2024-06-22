/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
        if (!head || !head.next) {
        return false;
    }

    let tortoise = head;
    let hare = head.next;

    while (hare !== tortoise) {
        if (!hare || !hare.next) {
            return false;
        }

        tortoise = tortoise.next; // Move tortoise by 1 step
        hare = hare.next.next; // Move hare by 2 steps
    }

    // If hare and tortoise meet, a cycle exists
    return true;
};