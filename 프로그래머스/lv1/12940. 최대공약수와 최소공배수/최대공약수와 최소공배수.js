function solution(n, m) {
    // const big = Math.max(n, m)
    // const small = Math.min(n, m)
    const ans = []
    
    for (let num = n; true; num += n) {
        if (num % m === 0) {
            ans.push(num)
            break
        }
    }
    
    // 최소공배수(L) 찾기 - n, m 중 큰 수를 기준으로 
    // for (let num = big; true; num += big) {
    //     if (num % small === 0) {
    //         ans.push(num)
    //         break
    //     }
    // }
    
    // A = aG, B = bG, L = abG => G = AB / L
    // ans.unshift(big * small / ans[0])
    ans.unshift(n * m / ans[0])
    
    return ans
}