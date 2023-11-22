function solution(my_string, indices) {
    let answer = ''
    let j = 0
    
    indices.sort((a, b) => a - b) // 정렬해서 인덱스 순서대로 접근할 수 있게 만든다

    // indices 배열에 있는 인덱스만 제외하고 모든 문자를 answer 변수의 문자열로 만든다
    for (let i = 0; i < my_string.length; i++) {
        if (j < indices.length && i === indices[j]) {
            j += 1
            continue
        }
        answer += my_string[i]
    }
    
    return answer
}
