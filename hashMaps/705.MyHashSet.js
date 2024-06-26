
var MyHashSet = function() {
	this.keyRange = 1000001;
	this.set = new Array(this.keyRange);
};

/**
 * @param {number} key
 * @return {void}
 */x
MyHashSet.prototype.add = function(key) {
	this.set[key] = true;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
	this.set[key] = false;
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
	return !!this.set[key]
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */