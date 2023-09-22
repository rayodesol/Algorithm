function solution(n) {
    // n의 제곱근(n의 1/2승)이 정수인지 확인한다. parseInt함수 사용.
    return parseInt(n ** 0.5) === n ** 0.5 ? 1 : 2
}