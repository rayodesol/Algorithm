function solution(a, b) {
    // 방법 2 - 백틱, Math.max 함수 사용
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
    
//     // 방법 1 - a, b를 각각 문자열로 바꿔 +로 합친 뒤 다시 숫자로 바꿔 크기를 비교한다.
//     const ab = Number(String(a) + String(b))
//     const ba = Number(String(b) + String(a))
    
//     return ab > ba ? ab : ba
}