function solution(arr) {
    // 방법 1 - 이중 for문
    const answer = []
    
    for (let num of arr) {
        for (let i = 0; i < num; i++) {
            answer.push(num)
        }
    }
    
    return answer
}