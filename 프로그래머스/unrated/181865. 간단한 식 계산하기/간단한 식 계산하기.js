function solution(binomial) {
    // 문자열을 띄어쓰기 기준으로 숫자와 연산자 분리 후, if-else문으로 연산자에 따라 처리
    const [a, op, b] = binomial.split(' ')
    
    if (op === '+') {
        return Number(a) + Number(b)
    } else if (op === '-') {
        return Number(a) - Number(b)
    } else {
        return Number(a) * Number(b)
    }
}