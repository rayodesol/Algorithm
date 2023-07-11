function solution(n, k) {
    // for문으로 k부터 n이하까지 k씩 더해가며 빈 배열에 추가한다.
    const answer = []
    
    for (let i = k; i <= n; i += k) {
        answer.push(i)
    }
    
    return answer
}