function solution(left, right) {
    let ans = 0
    
    for (let num = left; num <= right; num++) {
        let cnt = 0
        for (let n = 1; n <= num; n++) {
            if (num % n === 0) cnt += 1
        }
        cnt % 2 === 0 ? ans += num : ans -= num
    }
    
    return ans
}