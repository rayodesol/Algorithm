function solution(my_string) {
    // 전개 연산자로 각 글자로 이루어진 배열을 만든 뒤
    // reverse 함수로 역순으로 배열하고, join 함수로 문자열로 만든다.
    return [...my_string].reverse().join("")
}