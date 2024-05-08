
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
	let nodesSeen = new Set();

	let node = head;

	while(node != null) {

		if(nodesSeen.has(node)) {
			return node;
		} else{
			nodesSeen.add(node)
			node = node.next;
		}
	}
	return null;
};

// var detectCycle = function (head) {
//
// 	let tortoise = head;
// 	let hare = head;
//
// 	while (hare && hare.next) {
// 		tortoise = tortoise.next;
// 		hare = hare.next.next;
//
// 		if (tortoise === hare) {
// 			break;
// 		}
// 	}
//
// 	if (!hare || !hare.next) {
// 		return null;
// 	}
//
// 	hare = head;
//
// 	while (tortoise !== hare) {
// 		tortoise = tortoise.next;
// 		hare = hare.next;
// 	}
//
// 	return tortoise;
// };