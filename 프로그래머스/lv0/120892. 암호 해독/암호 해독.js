function solution(cipher, code) {
    // 전개 연산자, filter, join 함수 사용. 인덱스를 code로 나눴을 때 code-1인 경우의 글자를 빼낸다.
    return [...cipher].filter((el, idx) => idx % code === code -1).join('')
}