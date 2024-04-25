class MyHashMap {
    constructor(initialCapacity = 16) {
        this.buckets = new Array(initialCapacity); 
        this.size = 0;
    }

    // Simple hash function (improve in a real implementation)
    _hash(key) {
        return key % this.buckets.length;
    }

    put(key, value) {
        const bucketIndex = this._hash(key);
        let bucket = this.buckets[bucketIndex];

        // If empty, create a new bucket
        if (!bucket) {
            bucket = this.buckets[bucketIndex] = []; 
        }

        // Update if key exists, otherwise add new entry
        for (const entry of bucket) {
            if (entry[0] === key) {
                entry[1] = value; 
                return; 
            }
        }

        bucket.push([key, value]);
        this.size++;
    }

    get(key) {
        const bucketIndex = this._hash(key);
        const bucket = this.buckets[bucketIndex];

        if (bucket) {
            for (const entry of bucket) {
                if (entry[0] === key) {
                    return entry[1];
                }
            }
        }

        return -1; 
    }

    remove(key) {
        const bucketIndex = this._hash(key);
        const bucket = this.buckets[bucketIndex];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1); 
                    this.size--;
                    return; 
                }
            }
        }
    }
}
