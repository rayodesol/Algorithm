function solution(x) {
    let sum = 0
    let i = x
    
    while (i > 0) {
        sum += i % 10
        i = parseInt(i / 10)
    }
    
    return x % sum === 0 ? true : false
}