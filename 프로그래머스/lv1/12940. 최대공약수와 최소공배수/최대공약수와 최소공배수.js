function solution(n, m) {
    const big = Math.max(n, m)
    const small = Math.min(n, m)
    const ans = []
    
    for (let num = big; true; num += big) {
        if (num % small === 0) {
            ans.push(num)
            break
        }
    }
    
    // A = aG, B = bG, L = abG => G = AB / L
    ans.unshift(big * small / ans[0])
    
    return ans
}