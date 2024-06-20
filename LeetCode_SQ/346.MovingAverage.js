/**
 * @param {number} size
 */
var MovingAverage = function(size) {
	this.size = size;
	this.queue = [];
	this.currentSum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {

	if(this.queue.length === this.size) {

		this.currentSum -= this.queue.shift();
	}
	this.queue.push(val);
	this.currentSum += val;
	return this.currentSum / this.queue.length;


};

