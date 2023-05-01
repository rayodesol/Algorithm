function solution(a, b) {
    if (a === b) return a // a, b가 같은 수일 때, a 리턴
    
    // a > b 일 때, a와 b 바꾸기
    if (a > b) {
        const tmp = a
        a = b
        b = tmp
    }
    
    let sum = 0
    
    // for문으로 a부터 b까지 증가하며 합 구하기
    for (let i = a; i <= b; i++) {
        sum += i
    }
    
    return sum
}