function solution(money) {
    // 몫 = 나누기 연산 + parseInt(), 나머지 연산자
    return [parseInt(money / 5500), money % 5500]
}