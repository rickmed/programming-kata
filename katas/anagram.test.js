const { anagram } = require('./anagram.js');

describe('anagram', () => {

    it('works', () => {

        const tests = [
            ['', '', true],
            ['aaz', 'zza', false],
            ['anagram', 'nagaram', true],
            ['rat', 'car', false],
            ['awesome', 'awesom', false],
            ['qwerty', 'qeywrt', true],
        ];

        for (const test of tests) {
            const out = anagram(test[0], test[1]);
            expect(out).toEqual(test[2]);
        }

    })
})