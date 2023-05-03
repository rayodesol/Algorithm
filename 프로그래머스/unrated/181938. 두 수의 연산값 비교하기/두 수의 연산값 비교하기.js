function solution(a, b) {
    // 연산 ⊕는 a, b를 문자열로 바꿔 합한 후 숫자로 바꾼다.
    // 삼항 연산자로 큰 값을 리턴한다.
    return Number(String(a) + String(b)) >= 2 * a * b ? Number(String(a) + String(b)) : 2 * a * b;
}