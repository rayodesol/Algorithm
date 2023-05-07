function solution(a, b) {
    // 방법 2 - reduce 함수 사용
    return a.reduce((acc, el, idx) => {
        return acc += el * b[idx]
    }, 0)
    
//     // 방법 1 - for문 사용
//     let result = 0
    
//     for (let i = 0; i < a.length; i++) {
//         result += a[i] * b[i]
//     }
    
//     return result
}