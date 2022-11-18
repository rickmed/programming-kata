// the node is an object that as at least a val property as a sort base.
class MinHeap {
    constructor(...nodes) {
        this._store = [];
        for (const node of nodes) {
            this.insert(node);
        }
    }

    clear() {
        this._store = [];
    }

    get size() {
        return this._store.length
    }

    insert(node) {
        const store = this._store;
        store.push(node);
        bubbleUp(node);

        function bubbleUp(node) {
            let nodeIdx = store.length - 1;

            while (true) {
                let parentIdx = getParentIdx(nodeIdx);
                let parent = store[parentIdx];
                if (node.val >= parent.val) break
                store[parentIdx] = node;
                store[nodeIdx] = parent;
                nodeIdx = parentIdx;
            }

            store[nodeIdx] = node;

            function getParentIdx(nodeIdx) {
                if (nodeIdx === 0) return 0
                return Math.floor((nodeIdx - 1) / 2);
            }
        }
    }

    peek() {
        return this._store[0] || undefined
    }

    pull() {
        const store = this._store;
        if (store.length === 0) return undefined
        if (store.length === 1) {
            return store.pop();
        }
        const returnNode = store[0];
        store[0] = store.pop();
        bubbleDown();

        function bubbleDown() {
            let nodeIdx = 0;
            let node = store[nodeIdx];
            let minChildIdx = getMinChildIdx(nodeIdx);
            // i know at least have leftChild bc store.length >= 2, so minChildIdx can't be undefined
            let minChild = store[minChildIdx];

            while (minChild && node.val > minChild.val) {
                store[nodeIdx] = minChild;
                store[minChildIdx] = node;
                nodeIdx = minChildIdx;
                minChildIdx = getMinChildIdx(nodeIdx);
                minChild = store[minChildIdx];
            }

            //
            function getMinChildIdx() {
                const leftChildIdx = getLeftChildIdx();

                if (leftChildIdx >= store.length) {
                    return undefined
                }

                const rightChildIdx = leftChildIdx + 1;

                if (rightChildIdx > store.length - 1) {
                    return leftChildIdx
                }


                const returnIdx =
                    store[leftChildIdx].val <= store[rightChildIdx].val ?
                    leftChildIdx : rightChildIdx

                return returnIdx

                //
                function getLeftChildIdx() {
                    return nodeIdx * 2 + 1
                }
            }

        }

        return returnNode
    }

}


module.exports = {
    MinHeap: MinHeap
}


