function solution(num_list, n) {
    const answer = []
    
    answer.push(...num_list.splice(n))
    answer.push(...num_list.splice(0, n))
    
    return answer
}