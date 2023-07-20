function solution(a, b) {
    // a, b를 각각 문자열로 바꿔 +로 합친 뒤 다시 숫자로 바꿔 크기를 비교한다.
    const ab = Number(String(a) + String(b))
    const ba = Number(String(b) + String(a))
    return ab > ba ? ab : ba
}