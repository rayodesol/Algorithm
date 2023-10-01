function solution(numbers, direction) {
    const answer = []
    
    if (direction === 'right') {
        answer.push(numbers.pop())
        answer.push(...numbers)
    } else {
        answer.push(...numbers.slice(1))
        answer.push(numbers[0])
    }
    
    return answer
}