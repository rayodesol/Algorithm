function solution(n) {
    // 모든 원소가 0인 n행 n열 이중배열을 선언한다.
    const answer = Array.from(Array(n), () => Array(n).fill(0))
    
    // 행, 열의 인덱스가 같은 원소만 1로 바꾼다.
    for (let i = 0; i < n; i++) {
        answer[i][i] = 1
    }
    
    return answer
}