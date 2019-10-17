const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.counterNodes = 0;
	}

	push(data, priority) {
		const node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.counterNodes++;
	}

	pop() {
		if (!this.isEmpty()) {
			let detachedRoot = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detachedRoot);
			this.shiftNodeDown(this.root);
			this.counterNodes--;
			return detachedRoot.data;
		}
	}

	detachRoot() {
		let tempRoot = this.root;
		let rootIndex = this.parentNodes.indexOf(tempRoot);
		if (rootIndex !== -1) {
			this.parentNodes.splice(rootIndex, 1);
		}
		this.root = null;
		return tempRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		if (!this.root) {
			this.root = this.parentNodes.pop();
		}
		if (this.root !== undefined) {
			if (this.root.parent) {
				if (this.root.parent.right === this.root) {

					this.root.parent.right = null;

					if (this.root.parent !== detached) {

						this.parentNodes.unshift(this.root.parent);
					}

				} else if (this.root.parent.left === this.root) {
					this.root.parent.left = null;
				}
			}

			this.root.parent = null;

			this.root.right = detached.right;
			this.root.left = detached.left;

			if (detached.right) {
				detached.right.parent = this.root;
			}

			if (detached.left) {
				detached.left.parent = this.root;
			}

			if (!this.root.left || !this.root.right) {
				this.parentNodes.unshift(this.root);
			}
		}
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		return this.root === null;
	}

	clear() {
		this.parentNodes = [];
		this.root = null;
		this.counterNodes = 0;
	}

	insertNode(node) {
		if (this.parentNodes.length === 0) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes.push(node);
			if (!this.parentNodes[0].left) {
				this.parentNodes[0].appendChild(this.parentNodes[this.parentNodes.length - 1]);
			} else if (!this.parentNodes[0].right) {
				this.parentNodes[0].appendChild(this.parentNodes[this.parentNodes.length - 1]);
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
