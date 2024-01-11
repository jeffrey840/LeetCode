

function printLinkedListInReverse(head) {

	if (head.getNext()) {
		printLinkedListInReverse(head.getNext());
	}
	return head.printValue();

}