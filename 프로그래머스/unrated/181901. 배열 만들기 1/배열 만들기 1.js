function solution(n, k) {
    // 방법 1 - for문
    const answer = []
    
    for (let i = k; i <= n; i += k) {
        answer.push(i)
    }
    
    return answer
}