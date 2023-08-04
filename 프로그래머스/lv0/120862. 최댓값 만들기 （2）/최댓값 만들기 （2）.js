function solution(numbers) {
//     // 방법 2 - 완전탐색
//     let answer = -(10 ** 8) // 문제 범위내에서 나올 수 있는 가장 최솟값으로 초기화
    
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             answer = Math.max(answer, numbers[i] * numbers[j])
//         }
//     }
    
//     return answer
    
    // 방법 1 - sort 함수로 정렬 후, 맨 앞 두 수 곱과 맨 뒤 두 수 곱 중 큰 값을 리턴한다.
    const n = numbers.length
    
    numbers.sort((a, b) => a - b)
    
    return Math.max(numbers[0] * numbers[1], numbers[n - 1] * numbers[n - 2])
}