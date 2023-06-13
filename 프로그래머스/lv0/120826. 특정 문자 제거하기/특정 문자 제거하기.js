function solution(my_string, letter) {
    // 방법 1 - 전개연산자, filter, join 함수
    // 전개연산자로 배열로 만들어 filter 함수로 letter를 제외한 뒤 join 함수로 문자열로 만든다.
    return [...my_string].filter(el => el !== letter).join('')
}