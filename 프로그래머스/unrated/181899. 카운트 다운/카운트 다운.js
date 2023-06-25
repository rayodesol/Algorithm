function solution(start, end) {
    // 방법 2 - for문
    const answer = []
    for (let i = start; i >= end; i--) {
        answer.push(i)
    }
    
    return answer
    
    // // 방법 1 - (start-end+1)개 원소인 배열을 만들어 start에서 인덱스 값을 뺀 값이 원소가 되게 한다.
    // return Array(start - end + 1).fill().map((el, idx) => start - idx)
}