function solution(array) {
    try {
        return array.toString().match(/7/g).length
    } catch (e) {
        return 0
    }
}