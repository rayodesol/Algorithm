function solution(num_list, n) {
    // 방법 2 - for문
    const answer = []
    
    for (let i = 0; i < num_list.length; i += n)
        answer.push(num_list[i])
    
    return answer
    
    // // 방법 1 - filter 함수로 인덱스가 n의 배수인 것만 남긴다.
    // return num_list.filter((el, idx) => idx % n === 0)
}