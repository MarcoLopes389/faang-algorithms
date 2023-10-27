// percorre a string até encontrar a primeira repetição
// percorre de novo a partir do próximo índice
function lengthOfLongestSubstring(s) {
    const substrings = new Set()
    for (let i = 0; i < s.length; i++) {
        let substring = ''
        for (let j = i; j < s.length; j++) {
            if (!substring.includes(s[j])) {
                substring += s[j]
            } else {
                substrings.add(substring)
                break
            }
        }
    }
    let greather = 0
    substrings.forEach((sub) => {
        if (sub.length > greather) {
            greather = sub.length
        }
    })

    return greather
};

module.exports = {
    lengthOfLongestSubstring
}