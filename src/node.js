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
			throw new Error('error');
		}

	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent) {

			if (this.parent.left === this) {
				if (this.parent.right) {
					this.parent.right.parent = this;
				}
			} else if (this.parent.right === this) {
				if (this.parent.left) {
					this.parent.left.parent = this;
				}
			}

			if (this.parent.parent) {
				if (this.parent.parent.left === this.parent) {
					this.parent.parent.left = this;
				} else if (this.parent.parent.right === this.parent) {
					if (this.parent.parent) {
						this.parent.parent.right = this;
					}
				}
			}

			let tempRight = this.right;
			let tempLeft = this.left;

			if (this.parent.left === this) {
				this.left = this.parent;
				this.right = this.parent.right;
			} else if (this.parent.right === this) {
				this.right = this.parent;
				this.left = this.parent.left;
			}

			this.parent.right = tempRight;
			this.parent.left = tempLeft;

			let tempParentParent = this.parent.parent;

			this.parent.parent = this;
			this.parent = tempParentParent;
		}
	}
}

module.exports = Node;
