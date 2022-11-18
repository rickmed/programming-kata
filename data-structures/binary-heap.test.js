const {MinHeap} = require('./binary-heap.js');
jest.setTimeout(1000);

describe('MinHeap', () => {

    it('#clear', () => {
        const node1 = {val: 1};
        const node2 = {val: 2};
        const node3 = {val: 3};
        const minH = new MinHeap(node1, node2, node3);
        minH.clear();
        expect(minH.peek()).toEqual(undefined);
    })

    it('#insert', () => {
        let minH = new MinHeap();
        const node0 = {val: 0};
        const node1 = {val: 1};
        const node2 = {val: 2};
        const node3 = {val: 3};
        minH.insert(node3);
        minH.insert(node1);
        expect(minH._store).toEqual([node1, node3]);
        minH.insert(node2);
        expect(minH._store).toEqual([node1, node3, node2]);
        minH.insert(node0);
        expect(minH._store).toEqual([node0, node1, node2, node3])
    })


    it('#pull', () => {
        let minH = new MinHeap();
        expect(minH.pull()).toEqual(undefined);

        const node0 = {val: 0};
        const node1 = {val: 1};
        const node2 = {val: 2};
        const node3 = {val: 3};
        minH.insert(node3);
        minH.insert(node1);
        minH.insert(node2);
        minH.insert(node0);

        expect(minH.pull()).toEqual(node0);
        expect(minH.pull()).toEqual(node1);
        expect(minH.pull()).toEqual(node2);
        expect(minH.pull()).toEqual(node3);
        expect(minH.pull()).toEqual(undefined);
    })

})



/*
export tests = [{
    title: "MinHeap",
    tests: [
        "pull()", t => {

            t(output, expected, "");
        },
    ]
}]




it('pull()', () => {
        let minH = new MinHeap();
        expect(minH.pull()).toEqual(undefined);
        test(output, expected, "");

        const node0 = {val: 0};
        const node1 = {val: 1};
        const node2 = {val: 2};
        const node3 = {val: 3};
        minH.insert(node3);
        minH.insert(node1);
        minH.insert(node2);
        minH.insert(node0);

        expect(minH.pull()).toEqual(node0);
        expect(minH.pull()).toEqual(node1);
        expect(minH.pull()).toEqual(node2);
        expect(minH.pull()).toEqual(node3);
        expect(minH.pull()).toEqual(undefined);
    })

*/