function solution(n) {
    let ans = 0
    
    for (let num = 0; num <= n; num += 2) {
        ans += num
    }
    
    return ans
}