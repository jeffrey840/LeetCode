function ListNode(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) {
        return -1; // Index is out of bounds
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.size++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return; // If index is greater than the length, do not insert
    }
    if (index <= 0) {
        this.addAtHead(val); // Add at head if index is 0 or less
    } else {
        const newNode = new ListNode(val);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return; // Do nothing if index is out of bounds
    }
    if (index === 0) {
        this.head = this.head.next; // Remove the head
    } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next; // Skip the node to delete
    }
    this.size--;
};

// Example usage:
// var myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// console.log(myLinkedList.get(1)); // returns 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// console.log(myLinkedList.get(1)); // returns 3
