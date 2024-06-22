/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    let slow = head;
    let fast = head;
    
    while(fast != null && fast.next != null ) {
        slow = slow.next;
        fast = fast.next.next;
          }
    return slow;
    
    
};
function createLinkedList(elements) {
    let dummy = new ListNode(0);
    let current = dummy;
    elements.forEach(element => {
        current.next = new ListNode(element);
        current = current.next;
    });
    return dummy.next;
}

// Helper function to convert linked list to array starting from the middle node
function linkedListToArray(node) {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}
