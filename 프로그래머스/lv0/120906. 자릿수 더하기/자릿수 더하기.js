function solution(n) {
    // 방법 2 - while문으로 n을 10으로 나눈 나머지의 합을 구한다.
    let answer = 0
    while (n > 0) {
        answer += n % 10
        n = parseInt(n / 10)
    }
    return answer
    
    // // 방법 1 - 문자열로 바꾼 후 전개연산자로 배열로 만든 뒤, reduce 함수로 각 자리 수 합을 구한다.
    // return [...String(n)].reduce((acc, el) => acc += Number(el), 0)
}