function solution(s1, s2) {
    // 방법 1 - 이중 for문
    let answer = 0
    
    for (el_s1 of s1) {
        for (el_s2 of s2) {
            if (el_s1 === el_s2) {
                answer += 1
                // break // 같은 것을 찾으면 다음 글자로 넘어간다.
            }
        }
    }
    
    return answer
}