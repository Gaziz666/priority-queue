class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left && this.right) {
			return;
		} else if (!this.left) {
			this.left = node;
			node.parent = this;
		} else {
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (node === this.right) {
			this.right = null;
			node.parent = null;
		} else if (node === this.left) {
			this.left = null;
			node.parent = null;
		}else if (node !== node.right && node !== node.right) {
			throw new Error('error: passed node is not a child of this node');
		}

	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent) {
			const parentsParent = this.parent.parent;
			const parent = this.parent;

			const leftParent = parent.left;
			const rightParent = parent.right;
			const left = this.left;
			const right = this.right;

			this.parent = parentsParent;
			parent.parent = this;

			if (parentsParent && parentsParent.right === parent) {
				parentsParent.right = this;
			} else if (parentsParent && parentsParent.left === parent) {
				parentsParent.left = this;
			}
			
			if (this === parent.right) {
				if (leftParent) {
					leftParent.parent = this;
				}
				
				this.right = this.parent;
				this.left = parent.left;
				parent.parent = this;
				parent.left = left;
				parent.right = right;
			} else if (this === parent.left) {
					if (rightParent) {
						rightParent.parent = this;
					}
					
					this.left = parent;
					this.right = parent.right;
					parent.parent = this;
					parent.left = left;
					parent.right = right;
			}
		}
	}
}

module.exports = Node;