class ListNode {
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

// let head = new ListNode(1);  // Create the head node with value 1
// head.next = new ListNode(2);  // Add second node with value 2
// head.next.next = new ListNode(3);  // Add third node with value 3
//
// let getSum = head => {
// 	if (!head) {
// 		return 0;
// 	}
// 	return head.val + getSum(head.next);
// }
//
//
// console.log(getSum(head));  // Outputs: 6


let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

