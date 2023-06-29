function solution(n) {
    // 약수의 개수를 구하는 것과 같다.
    let answer = 0
    
    // n을 1 ~ n의 제곱근 범위의 수로 나눠 떨어질 때의 수와 그 수로 n을 나눴을 때의 수를 센다.
    for (let num = 1; num <= Math.sqrt(n); num++) {
        if (n % num === 0) {
            answer += 1
            // 중복되는 수는 제거해서 센다.
            if (n / num !== num) answer += 1
        }
    }
    
    return answer
}