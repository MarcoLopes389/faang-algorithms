const { lengthOfLongestSubstring } = require('./index')

const testCases = [
    {
        value: 'abcabcbb',
        result: 3
    },
    {
        value:'bbbbb',
        result: 1
    },
    {
        value: 'pwwkew',
        result: 3
    }
]

for (const testCase of testCases) {
    console.time('Tempo de execução')
    const result = lengthOfLongestSubstring(testCase.value)
    console.timeEnd('Tempo de execução')
    if (result == testCase.result) {
        console.log('Accepted')
    }
}