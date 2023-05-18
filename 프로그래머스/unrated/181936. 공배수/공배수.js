function solution(number, n, m) {
    // 삼항 연산자 사용. number를 n, m으로 나눴을 때 모두 나머지가 0이면 공배수이다.
    return number % n === 0 && number % m === 0 ? 1 : 0
}