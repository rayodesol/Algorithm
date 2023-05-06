function solution(absolutes, signs) {
    // 방법 2 - reduce 함수 사용
    return absolutes.reduce((acc, el, idx) => {
        return signs[idx] ? acc += el : acc -= el
    }, 0)
    
//     // 방법 1
//     let result = 0
    
//     // 삼항 연산자로 signs의 값에 따라 absolutes 값을 더하거나 뺀다.
//     for (let i = 0; i < absolutes.length; i++) {
//         signs[i] ? result += absolutes[i] : result -= absolutes[i]
//     }
    
//     return result
}