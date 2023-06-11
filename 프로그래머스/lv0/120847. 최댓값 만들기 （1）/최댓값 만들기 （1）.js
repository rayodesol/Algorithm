function solution(numbers) {
    numbers.sort((a, b) => b - a) // sort 함수로 내림차순 정렬
    return numbers[0] * numbers[1] // 1, 2번째 원소 곱을 리턴
}