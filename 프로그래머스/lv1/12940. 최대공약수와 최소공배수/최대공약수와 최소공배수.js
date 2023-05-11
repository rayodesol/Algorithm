function solution(n, m) {
    const ans = []
    
    // 최소공배수(L) - n의 배수 중에 m으로 나눠지는 수 찾기
    for (let num = n; true; num += n) {
        if (num % m === 0) {
            ans.push(num)
            break
        }
    }
    
    // 최대공약수(G)
    // A = aG, B = bG, L = abG => G = AB / L
    ans.unshift(n * m / ans[0]) // unshift 함수로 배열의 맨 앞에 추가
    
    return ans
}