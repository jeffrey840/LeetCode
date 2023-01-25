// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// 	Implement the MinStack class:
//
// MinStack() initializes the stack object.
// 	void push(int val) pushes the element val onto the stack.
// 	void pop() removes the element on the top of the stack.
// 	int top() gets the top element of the stack.
// 	int getMin() retrieves the minimum element in the stack.
// 	You must implement a solution with O(1) time complexity for each function.
//
//
//
// Example 1:
//
// Input
// 	["MinStack","push","push","push","getMin","pop","top","getMin"]
// 	[[],[-2],[0],[-3],[],[],[],[]]
//
// Output
// 	[null,null,null,null,-3,null,0,-2]
//
// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
//
//
// Constraints:
//
// 	-231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// 	At most 3 * 104 calls will be made to push, pop, top, and getMin.


/*

contains 2 stacks
push every item into one container and  compare if it is the minimum in the sequence

as you push into the stack make sure to push into the moi  stack

input = [MinStack,push,getMin,push][[],[-2],[1],[2]]

|2|    |-2|   no other number is less than -2
|1|    |-2|
|-2|    |-2|
| |    ||
|_|    |_| <- keeps track of min

minStack =
newMinStack =

* */

class MinStack  {

	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(val) {
		if(!this.stack.length) {
			this.stack.push(val);
			this.minStack.push(val);
		} else {
			this.stack.push(val);
			this.minStack.push(Math.min(this.minStack[this.minStack.length-1 ],val))
		}
	}

	pop() {
		if(!this.stack.length) return null;
		this.minStack.pop();
		return this.stack.pop();
	}

	top() {
		return this.stack[this.stack.length -1];
	}

	getMin() {
		return this.minStack[this.minStack.length -1]
	}
}




/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */