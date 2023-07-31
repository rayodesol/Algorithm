function solution(num_list, n) {
    // 방법 2
    return [...num_list.slice(n), ... num_list.slice(0, n)]
    
//     // 방법 1
//     const answer = []
    
//     answer.push(...num_list.slice(n))
//     answer.push(...num_list.slice(0, n))
    
//     return answer
}