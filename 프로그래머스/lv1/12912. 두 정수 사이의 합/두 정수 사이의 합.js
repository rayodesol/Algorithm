function solution(a, b) {
    if (a === b) return a
    
    // if (a > b) {
    //     const tmp = a
    //     a = b
    //     b = tmp
    // }
    
    let sum = 0
    
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i
    }
    
    return sum
}