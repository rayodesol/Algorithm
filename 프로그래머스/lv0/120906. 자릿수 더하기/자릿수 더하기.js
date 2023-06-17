function solution(n) {
    // 방법 1 - 문자열로 바꾼 후 전개연산자로 배열로 만든 뒤, reduce 함수로 각 자리 수 합을 구한다.
    return [...String(n)].reduce((acc, el) => acc += Number(el), 0)
}