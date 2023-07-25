function solution(number) {
    const n = number.length
    let answer = 0
    
    // 완전탐색
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    answer += 1
                }
            }
        }
    }
    
    return answer
}