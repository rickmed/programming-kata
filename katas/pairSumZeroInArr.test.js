const { pairSumZeroInArr } = require('./pairSumZeroInArr.js');

describe('pairSumZeroInArr', () => {

    it('works', () => {

        const tests = [
            [[-8,-3,-2,-1,0,1,2,3,5], [-3,3]],
            [[-2,0,1,3], false],
            [[1,2,3], false],
        ];

        for (const test of tests) {
            const out = pairSumZeroInArr(test[0]);
            expect(out).toEqual(test[1]);
        }

    })
})  