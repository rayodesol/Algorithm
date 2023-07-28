function solution(n_str) {
    let start = 0
    for (let i = 0; i < n_str.length; i++) {
        if (n_str[i] != '0') {
            start = i
            break
        }
    }
    return n_str.slice(start)
}