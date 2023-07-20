function solution(a, b) {
    // a, b를 각각 문자열로 바꿔 +로 합친 뒤 다시 숫자로 바꿔 크기를 비교한다.
    const strA = String(a)
    const strB = String(b)
    const ab = Number(strA + strB)
    const ba = Number(strB + strA)
    
    return ab > ba ? ab : ba
}