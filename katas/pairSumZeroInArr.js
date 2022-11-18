// Pattern: multiple pointers

// accepts a sorted array and finds the first pair that sums 0
function pairSumZeroInArr(arr) {
    let i = 0
    let j = arr.length - 1;

    let sum;
    while (i < j) {
        sum = arr[i] + arr[j];
        if (sum === 0) {
            return [arr[i], arr[j]]
        }
        if (sum > 0) {
            j--
        }
        else {
            i++
        }

    }
    return false
}

exports.pairSumZeroInArr = pairSumZeroInArr;
