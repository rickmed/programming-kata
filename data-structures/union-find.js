class UnionFind {
    constructor(size) {
        this._componentsN = size;
        const store = Array(size).fill(-1);  // all sets have size 1 and they are their own root
        this._store = store;
    }

    // returns the set it belongs to (idx)
    // id:: int
    findRoot(id) {
        const store = this._store;

        let rootId = id;
        while (store[rootId] >= 0) {  // if negative, means I reached its root.
            rootId = store[rootId];
        }

        compressPaths(id, rootId);

        return rootId

        // Can only be done in find(id) since pointers only goes from child to parent
        function compressPaths(id, rootId) {
            let nodeId = id;
            while (nodeId !== rootId) {
                let next = store[nodeId];   // -1
                store[nodeId] = rootId;    // change pointers to 0
                nodeId = next;
            }
        }
    }

    connected(pID, qID) {
        return this.findRoot(pID) === this.findRoot(qID)
    }

    componentSize(id) {
        const rootID = this.findRoot(id);
        const size = this._store[rootID];
        return Math.abs(size)
    }

    unify(a_id, b_id) {

        const a_root = this.findRoot(a_id);
        const b_root = this.findRoot(b_id);

        if (a_root === b_root) return   // already in same group

        // always merge b into a
        // best would be to merge the smallest set into the largest.
        // but this is simpler
        const store = this._store;
        const b_size = store[b_root];
        store[b_root] = a_root; 

        store[a_root] = store[a_root] + b_size;   // update set size
        this._componentsN--;

        return this.componentSize(a_root)
    }
}

module.exports = {
    UnionFind: UnionFind
}