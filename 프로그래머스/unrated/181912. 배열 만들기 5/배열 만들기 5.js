function solution(intStrs, k, s, l) {
    let answer = []
    
    for (string of intStrs) {
        let num = parseInt(string.slice(s, s + l))
        if (num > k) {
            answer.push(num)
        }
    }
    
    return answer
}