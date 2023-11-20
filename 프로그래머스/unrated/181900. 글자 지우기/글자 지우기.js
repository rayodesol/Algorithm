function solution(my_string, indices) {
    let answer = ''
    let j = 0
    
    indices.sort((a, b) => a - b)
    
    for (let i = 0; i < my_string.length; i++) {
        if (j < indices.length && i === indices[j]) {
            j += 1
            continue
        }
        answer += my_string[i]
    }
    
    return answer
}