/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = (head, k) => {
    if (!head || k === 0) return head;

    // First pass to find the length and the end of the list
    let lastElement = head;
    let length = 1;
    while (lastElement.next) {
        lastElement = lastElement.next;
        length++;
    }

    // Adjust k to avoid unnecessary full rotations
    k = k % length;
    if (k === 0) return head;

    // Second pass to find the new tail: (length - k - 1)th node
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }
    
    let newHead = newTail.next;

    // Rotate the list
    lastElement.next = head;
    newTail.next = null;

    return newHead;
}
