function solution(rsp) {
    // for문, 삼항 연산자 사용.
    let answer = ''
    
    for (let el of rsp) {
        answer += el === '2' ? '0' : el === '0' ? '5' : '2'
    }
    
    return answer
}