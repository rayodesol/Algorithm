function solution(x, n) {
    const answer = [];
    
    // x의 1~n배수가 원소인 배열이므로
    for (let i = 1; i <= n; i++) {
        answer.push(x * i)
    }
    
    return answer;
}