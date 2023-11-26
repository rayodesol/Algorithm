function solution(array) {
    try {
        // 정규식으로 특정 문자 개수 세기; "문자열".match(/문자/g).length
        return array.toString().match(/7/g).length
    } catch (e) {
        // 찾는 문자가 없을 때 예외 처리
        return 0
    }
}