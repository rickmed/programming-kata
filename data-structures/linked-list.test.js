const {LinkedList} = require('./linked-list.js');

describe('Linked List', () => {

    it('#clear', () => {
        let ll = new LinkedList(1, 2, 3);
        ll.clear();
        expect(ll.get(0)).toEqual(undefined);
        expect(ll.length).toEqual(0);
    })

    it('#push', () => {
        let ll = new LinkedList(1, 2, 3);
        expect(ll.get(0)).toEqual(1);
        expect(ll.get(1)).toEqual(2);
        expect(ll.get(2)).toEqual(3);
        expect(ll.length).toEqual(3);
    })

    it('#pop', () => {
        let ll = new LinkedList();
        expect(ll.pop()).toEqual(undefined);
        expect(ll.length).toEqual(0);

        ll.push(1);
        expect(ll.pop()).toEqual(1);
        expect(ll.length).toEqual(0);

        ll = new LinkedList(1,2,3);

        expect(ll.pop()).toEqual(3);
        expect(ll.get(2)).toEqual(undefined);
        expect(ll.length).toEqual(2);
    })

    it('#shift', () => {
        let ll = new LinkedList();
        expect(ll.shift()).toEqual(undefined);
        expect(ll.length).toEqual(0);

        ll.push(1);
        expect(ll.shift()).toEqual(1);
        expect(ll.length).toEqual(0);

        ll.push(1);
        ll.push(2);
        ll.push(3);
        ll.shift();
        expect(ll.head.next.val).toEqual(3);
        expect(ll.length).toEqual(2);
    })

    it('#unshift', () => {
        let ll = new LinkedList();
        expect(ll.unshift(1)).toEqual(1);
        expect(ll.length).toEqual(1);
        expect(ll.head.val).toEqual(1);

        ll.unshift(2);
        ll.unshift(3);
        expect(ll.head.next.next.val).toEqual(1);
        expect(ll.head.val).toEqual(3);
        expect(ll.length).toEqual(3);
    })

    it('#get', () => {
        let ll = new LinkedList();
        expect(ll.get(0)).toEqual(undefined);
        expect(ll.get(3)).toEqual(undefined);

        ll = new LinkedList(1, 2, 3);
        expect(ll.get(0)).toEqual(1);
        expect(ll.get(1)).toEqual(2);
        expect(ll.get(2)).toEqual(3);
        expect(ll.get(3)).toEqual(undefined);
    })

    it('#set', () => {
        let ll = new LinkedList(1,2,3);

        expect(ll.set(0, 4)).toEqual(true);
        expect(ll.get(0)).toEqual(4);

        expect(ll.set(2, 5)).toEqual(true);
        expect(ll.get(2)).toEqual(5);

        expect(ll.set(3, 5)).toEqual(false);
    })

    it('#insert', () => {
        let ll = new LinkedList();
        expect(ll.insert(0, 'something')).toEqual(true);
        expect(ll.get(0)).toEqual('something');
        expect(ll.length).toEqual(1);

        ll = new LinkedList(1,2,3);

        expect(ll.insert(1, 4)).toEqual(true);
        expect(ll.get(1)).toEqual(4);
        expect(ll.get(0)).toEqual(1);
        expect(ll.get(2)).toEqual(2);
        expect(ll.length).toEqual(4);

        expect(ll.insert(4, 5)).toEqual(true);
        expect(ll.get(4)).toEqual(5);
        expect(ll.get(3)).toEqual(3);
        expect(ll.length).toEqual(5);

        expect(ll.insert(6, 'something')).toEqual(false);
    })

    it('#remove', () => {
        let ll = new LinkedList();
            expect(ll.remove(0)).toEqual(false);
            expect(ll.get(0)).toEqual(undefined);
            expect(ll.length).toEqual(0);

        ll = new LinkedList('one');
            expect(ll.remove(0)).toEqual('one');
            expect(ll.get(0)).toEqual(undefined);
            expect(ll.length).toEqual(0);

        ll = new LinkedList('one', 'two', 'three');
            expect(ll.remove(1)).toEqual('two');
            expect(ll.get(0)).toEqual('one');
            expect(ll.get(1)).toEqual('three');
            expect(ll.length).toEqual(2);

        ll = new LinkedList('one', 'two', 'three');
            expect(ll.remove(2)).toEqual('three');
            expect(ll.length).toEqual(2);

        ll = new LinkedList('one', 'two', 'three');
            expect(ll.remove(3)).toEqual(false);
            expect(ll.length).toEqual(3);
    })

    it('#reverse', () => {
        let ll = new LinkedList();
            expect(ll.reverse()).toEqual(ll);
            expect(ll.length).toEqual(0);

        ll = new LinkedList('one', 'two');
            expect(ll.reverse()).toEqual(ll);
            expect(ll.length).toEqual(2);
            expect(ll.get(0)).toEqual('two');
            expect(ll.get(1)).toEqual('one');

        ll = new LinkedList('one', 'two', 'three');
            expect(ll.reverse()).toEqual(ll);
            expect(ll.get(0)).toEqual('three');
            expect(ll.get(1)).toEqual('two');
            expect(ll.get(2)).toEqual('one');
            expect(ll.length).toEqual(3);

        ll = new LinkedList('one', 'two', 'three', 'four');
            expect(ll.reverse()).toEqual(ll);
            expect(ll.get(0)).toEqual('four');
            expect(ll.get(1)).toEqual('three');
            expect(ll.get(2)).toEqual('two');
            expect(ll.get(3)).toEqual('one');
            expect(ll.length).toEqual(4);
    })

})