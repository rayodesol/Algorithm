function solution(order) {
    let cnt = 0
    const str = String(order)
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '3' || str[i] === '6' || str[i] === '9') {
            cnt += 1
        }
    }
    
    return cnt
}