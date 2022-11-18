class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/* implement:
get(idx), get at index, -1 means add from back
insertAt(), idem
removeAt(), idem
implemenet push, pop in terms of get/set
*/
class LinkedList {
    constructor(...vals) {
        this.head = null;
        this.length = 0;
        if (vals.length === 0) {
            return
        }
        for (const val of vals) {
            this.push(val);
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    push(val) {
        this.length++;
        const insertNode = new Node(val);
        let inspectingNode = this.head;
        if (inspectingNode === null) {
            this.head = insertNode;
            return this
        }
        while (inspectingNode.next) {
            inspectingNode = inspectingNode.next;
        }
        inspectingNode.next = insertNode;
        return this
    }

    pop() {
        if (this.length === 0) {
            return undefined
        }
        if (this.length === 1) {
            const removedVal = this.head.val;
            this.head = null;
            this.length--;
            return removedVal;
        }
        this.length--;
        let inspectingNode = this.head;
        let prevNode;
        while(inspectingNode.next) {
            prevNode = inspectingNode;
            inspectingNode = prevNode.next;
        }
        prevNode.next = null;
        return inspectingNode.val
    }

    shift() {
        if (this.head === null) {
            return undefined
        }
        const removedVal = this.head.val
        this.head = this.head.next;
        this.length--;
        return removedVal
    }

    unshift(val) {
        const newNode = new Node(val);
        const prevHead = this.head;
        this.head = newNode;
        newNode.next = prevHead;
        this.length++;
        return this.length
    }

    get(idx) {
        const node = LinkedList.#getNode(this, idx);
        if (!node) return undefined
        return node.val
    }

    static #getNode(ll, idx) {
        if (idx < 0) {
            throw 'negative indexes not supported yet'
        }
        if ((idx > ll.length - 1) || !ll.head) {
            return undefined
        }
        let checkingIdx = 0;
        let checkingNode = ll.head;
        while (idx !== checkingIdx) {
            checkingNode = checkingNode.next;
            checkingIdx++;
        }
        return checkingNode
    }

    set(idx, newVal) {
        const node = LinkedList.#getNode(this, idx);
        if (!node) return false
        node.val = newVal;
        return true
    }

    insert(idx, val) {
        if (idx < 0) {
            throw 'negative indexes not supported yet'
        }
        if (idx > this.length) {
            return false
        }
        if (idx === 0) {
            this.unshift(val)
            return true
        }
        if (idx === this.length) {
            this.push(val)
            return true
        }
        const nodeAtPrevIdx = LinkedList.#getNode(this, idx - 1);
        const nodeToPlaceAtNext = nodeAtPrevIdx.next;
        const newNode = new Node(val);
        nodeAtPrevIdx.next = newNode;
        newNode.next = nodeToPlaceAtNext;
        this.length++;
        return true
    }

    remove(idx) {
        if (idx < 0 ) {
            throw 'negative indexes not supported yet'
        }
        if ((idx > this.length - 1) || this.length === 0) {
            return false
        }
        if (idx === 0) {
            return this.shift();
        }
        if (idx === this.length - 1) {
            return this.pop();
        }
        const nodeAtPrevIdx = LinkedList.#getNode(this, idx - 1);
        const removedNodeVal = nodeAtPrevIdx.next.val;
        const newNextNode = nodeAtPrevIdx.next.next;
        nodeAtPrevIdx.next = newNextNode;
        this.length--;
        return removedNodeVal
    }

    reverse() {
        if (this.length < 2) {
            return this
        }
        // let prev = null;
        // let curr = this.head;
        // let next;
        // while (curr) {
        //     next = curr.next;
        //     curr.next = prev;
        //     prev = curr;
        //     curr = next;
        // }
        // this.head = prev;


        let curr = this.head;
        let next = curr.next;  // // if i don't this i lose pointer to next
        let prev = null;
        while (curr) {
            curr.next = prev;
            prev = curr;
            curr = next;
            next = next?.next;
        }
        this.head = prev;
        return this
    }
}


exports.LinkedList = LinkedList;