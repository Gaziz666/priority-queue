const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap();
		this.counterSize = 0;
	}

	push(data, priority) {
		this.heap.push(data, priority);
	}

	shift() {
		if (this.isEmpty()) {
			throw new Error('queue is empty')
		} else {
			this.counterSize--;
			return this.heap.pop();
		}
	}

	size() {
		return this.counterSize;
	}

	isEmpty() {
		return this.counterSize === 0;
	}
}

module.exports = PriorityQueue;