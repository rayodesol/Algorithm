function solution(n) {
    const answer = [n]
    
    while (n > 1) {
        n = n % 2 ? n * 3 + 1 : n / 2
        answer.push(n)
    }
    
    return answer
}