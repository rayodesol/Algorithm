function solution(numbers, n) {
    // // 방법 2 - reduce 함수로 n보다 커질 때까지 더한다.
    // return numbers.reduce((acc, el) => acc > n ? acc : acc += el, 0)
    
    // 방법 1 - for문으로 배열의 원소들을 순서대로 더하고, n보다 크면 리턴한다.
    let answer = 0
    
    for (num of numbers) {
        if (answer > n) return answer
        answer += num
    }
    
    return answer
}