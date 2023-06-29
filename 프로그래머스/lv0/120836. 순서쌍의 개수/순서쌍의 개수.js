function solution(n) {
    let answer = 0
    
    for (let num = 1; num <= n; num++) {
        if (n % num === 0) answer += 1
    }
    
    // for (let num = 1; num <= Math.sqrt(n); num++) {
    //     if (n % num === 0) {
    //         answer += 1
    //         if (n / num !== num) answer += 1
    //     }
    // }
    
    return answer
}