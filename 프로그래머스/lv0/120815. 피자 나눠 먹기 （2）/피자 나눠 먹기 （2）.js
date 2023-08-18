function solution(n) {
    let answer = 1
    
    // 피자조각이 n의 배수가 될 때까지 1씩 더해 찾기
    while (answer * 6 % n !== 0) {
        answer += 1
    }
    
    return answer
}