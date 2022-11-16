// Pattern: frequency counters

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let str1Freq = {};
    for (const char of str1) {
        str1Freq[char] ? str1Freq[char]++ : str1Freq[char] = 1;
    }

    for (const char of str2) {
        const charFreq = str1Freq[char];
        if (charFreq === undefined || charFreq === 0) {
            return false
        }
        str1Freq[char]--
    }
    return true
}

// {a: 3, n: 1, g: 1, r: 1, m: 1}
// {a: 3, n: 0, g: 1, r: 1, m: 1}
// {a: 2, n: 0, g: 1, r: 1, m: 1}
// ...
// 'anagram', 'nagaram'

exports.anagram = anagram;