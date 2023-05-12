function solution(n) {
    // 방법 1 - for문으로 0부터 n까지 2씩 증가하며 더해간다.
    let ans = 0
    
    for (let num = 0; num <= n; num += 2) {
        ans += num
    }
    
    return ans
}