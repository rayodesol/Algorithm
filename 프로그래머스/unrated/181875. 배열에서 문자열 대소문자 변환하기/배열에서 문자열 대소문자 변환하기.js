function solution(strArr) {
    // map 함수, 삼항 연산자로 인덱스가 홀/짝수인지에 따라 대/소문자로 바꾼다.
    return strArr.map((el, idx) => idx % 2 === 1 ? el.toUpperCase() : el.toLowerCase())
}