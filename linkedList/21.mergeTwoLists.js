// Definition of the ListNode class
function ListNode(val, next = null) {
	this.val = val;
	this.next = next;
}

// Function to convert an array to a linked list
function createLinkedList(arr) {
	let head = null;
	let current = null;
	for (let val of arr) {
		if (!head) {
			head = new ListNode(val);
			current = head;
		} else {
			current.next = new ListNode(val);
			current = current.next;
		}
	}
	return head;
}

// Function to merge two sorted linked lists
var mergeTwoLists = function(l1, l2) {
	if (!l1) {
		return l2;
	} else if (!l2) {
		return l1;
	} else if (l1.val <= l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};

// Function to print the linked list as an array
function printLinkedList(head) {
	let arr = [];
	let current = head;
	while (current !== null) {
		arr.push(current.val);
		current = current.next;
	}
	return arr;
}

// Testing block
var list1 = createLinkedList([1,2,4]);
var list2 = createLinkedList([1,3,4]);
var mergedList = mergeTwoLists(list1, list2);
console.log(printLinkedList(mergedList));
