const { UnionFind } = require('./union-find.js');
// jest.setTimeout(1000);

describe('union find', () => {

    it('#find', () => {
        const uf = new UnionFind(3);
        for (const id of [0,1,2]) {
            expect(uf.findRoot(id)).toEqual(id);
        }
    })

    it('#componentSize', () => {
        const uf = new UnionFind(3);
        for (const id of [0,1,2]) {
            expect(uf.componentSize(id)).toEqual(1);
        }
    })

    it('#unify', () => {
        const uf = new UnionFind(3);
        uf.unify(0,1);
        expect(uf.componentSize(0)).toEqual(2);
        uf.unify(1,2);
        expect(uf.componentSize(0)).toEqual(3);
    })

    it('#connected', () => {
        const uf = new UnionFind(3);
        uf.unify(0,1);
        uf.unify(1,2);
        expect(uf.connected(0,2)).toEqual(true);
    })
})