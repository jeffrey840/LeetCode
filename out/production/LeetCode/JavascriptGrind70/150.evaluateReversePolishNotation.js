// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
//
// 	Evaluate the expression. Return an integer that represents the value of the expression.
//
// 	Note that:
//
// 	The valid operators are '+', '-', '*', and '/'.
// 	Each operand may be an integer or another expression.
// 	The division between two integers always truncates toward zero.
// 	There will not be any division by zero.
// 	The input represents a valid arithmetic expression in a reverse polish notation.
// 	The answer and all the intermediate calculations can be represented in a 32-bit integer.
//
//
// 	Example 1:
//
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:
//
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:
//
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// 	= ((10 * (6 / (12 * -11))) + 17) + 5
// 	= ((10 * (6 / -132)) + 17) + 5
// 	= ((10 * 0) + 17) + 5
// 	= (0 + 17) + 5
// 	= 17 + 5
// 	= 22
//
//
// Constraints:
//
// 	1 <= tokens.length <= 104
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

/*

input will always be valid and inputs will always truncatinate towards zero

finding an operator and then the operator will effect the previous 2 numbers or groups

using a stack data structure

token = [2,1,+,3,*]
1.if it is a number push it into a "stack"

2.when we get to an operator "pop" the last num that was in and store it in a variable num2, and the remaining number in num1

|1|                                                 | |
|2|  -> num1 = 2, num2 = 1 ,the  stack is now empty | |
|_|                                                 |_|

3.then take num1 and num2 and run it with the operant, and get a new value
newNum  = num1 + num2

4.then push newNum into the stack
| |
|3|
|_|

5.push the remaining numbers into the stack

|3|
|3|
|_|

6.the next string is an operand so repeat step 2.

		num1 = 3, num2 = 3
|3|
|3|
|_|

7. in this case step 3 is repeated, 3*3 = 9, then 9 is pushed into stack

8.the last value in the stack will be the value

* */

var evalRPN = function(tokens) {

const stack = [];

const operators = {
	'+' : (num1,num2) => num1 + num2,
	'-' : (num1,num2) => num1 - num2,
	'*' : (num1,num2) => num1 * num2,
	'/' : (num1,num2) => Math.trunc(num1/num2)
};

for(let token of tokens) {
	if (operators[token]) {
		let num2 = stack.pop();
		let num1 = stack.pop();

		stack.push(operators[token](num1,num2))
	} else {
		stack.push(parseInt(token))
	}
}
return stack.pop();
};

