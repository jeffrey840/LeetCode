// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
//
// 	Implement the LRUCache class:
//
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// 	int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// 	The functions get and put must each run in O(1) average time complexity.
//
//
//
// 	Example 1:
//
// Input
// 	["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// 	[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// 	[null, null, null, 1, null, -1, null, -1, 3, 4]
//
// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
//
//
// Constraints:
//
// 	1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

/*

cap=3

k-v pair= 1-a, 2-b, 3-c,d-4

LRU         MRU
1-a, 2-b, 3-c   //cap is met, removing lru k-pair, and shifting

keep track of the most recently used and least recently used,if at capacity remove lru
and add new key-value
LRU         MRU
2-b, 3-c , d-4

if we use an element the new element will shift left and the used element will shift right to mru
using 3-c
LRU      MRU
2-b,d-4,c-3

if the key-value is changed that k-v pair will shift to the right, then we can change it
changing d-4
LRU      MRU
2-b,c-3, d-4 // changing to e-4


* */


class LRUCache{

	constructor(capacity) {
		this.capacity = capacity;
		this.map = new Map();
	}

	get(key) {
		if(this.map.has(key)) {
			let val = this.map.get(key)
			this.map.delete(key);
			this.map.set(key, val);
			return val
		} else {
			return -1
		}
	}

	put (key, val) {
		if(this.get(key) === -1) {
			if(this.capacity === this.map.size) {
				for(let keyVal of this.map) {
					this.map.delete(keyVal[0]);
					break;
				}
			}
		}
		this.map.set(key,val);
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
