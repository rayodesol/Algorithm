function solution(x) {
    // 방법 2
    // return x % [...String(x)].reduce((acc, el) => acc += Number(el), 0) === 0 ? true : false
    
    // 방법 1
    let sum = 0
    let i = x
    
    while (i > 0) {
        sum += i % 10
        i = parseInt(i / 10)
    }
    
    return x % sum === 0 ? true : false
}