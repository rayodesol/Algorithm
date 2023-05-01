function solution(a, b) {
    // 방법 2
    // a ~ b  합 구하는 수학 공식
    return (a + b) * (Math.abs(a - b) + 1) / 2
    
//     // 방법 1
//     if (a === b) return a // a, b가 같은 수일 때, a 리턴
    
//     // a > b 일 때, a와 b 바꾸기
//     if (a > b) {
//         const tmp = a
//         a = b
//         b = tmp
//     }
    
//     let sum = 0
    
//     // for문으로 a부터 b까지 증가하며 합 구하기
//     for (let i = a; i <= b; i++) {
//         sum += i
//     }
    
//     return sum
}