function solution(n, m) {
    const ans = []
    
    for (let num = n; true; num += n) {
        if (num % m === 0) {
            ans.push(num)
            break
        }
    }
    
    ans.unshift(n * m / ans[0])
    
    return ans
}