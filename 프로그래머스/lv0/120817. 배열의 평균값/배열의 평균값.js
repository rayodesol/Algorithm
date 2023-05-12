function solution(numbers) {
    // reduce 함수로 배열의 원소의 총 합을 구한 뒤, 배열의 길이로 나눠준다.
    return numbers.reduce((acc, el) => acc += el, 0) / numbers.length
}