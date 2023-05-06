function solution(absolutes, signs) {
    let result = 0
    
    // 삼항 연산자로 signs의 값에 따라 absolutes 값을 더하거나 뺀다.
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? result += absolutes[i] : result -= absolutes[i]
    }
    
    return result
}