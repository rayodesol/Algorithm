function solution(s) {
    // 전개 연산자로 한글자씩 띄어 배열로 만든다.
    // sort 함수로 정렬 후, reverse 함수로 뒤집은 뒤, join 함수로 문자열로 만든다.
    return [...s].sort().reverse().join("")
}