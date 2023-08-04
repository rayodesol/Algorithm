function solution(numbers) {
    // 방법 1 - sort 함수로 정렬 후, 맨 앞 두 수 곱과 맨 뒤 두 수 곱 중 큰 값을 리턴한다.
    const n = numbers.length
    
    numbers.sort((a, b) => a - b)
    
    return Math.max(numbers[0] * numbers[1], numbers[n - 1] * numbers[n - 2])
}