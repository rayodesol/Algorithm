function solution(x) {
    // // 방법 2
    // x를 문자열로 바꿔 전개 연산자로 한 자리씩 띄어 배열을 만든다.
    // reduce 함수로 자릿수의 합을 구한다 & 하샤드 수인지 판별한다.
    // return x % [...String(x)].reduce((acc, el) => acc += Number(el), 0) === 0 ? true : false
    
    // 방법 1
    let sum = 0
    let i = x
    
    // 자릿수의 합 구하기
    while (i > 0) {
        sum += i % 10 // x를 10으로 나눈 나머지가 각 자릿수
        i = parseInt(i / 10) // 0이 될 때까지 x를 10으로 나눈 몫으로 바꿈
    }
    
    // 하샤드 수인지 판별
    return x % sum === 0 ? true : false
}