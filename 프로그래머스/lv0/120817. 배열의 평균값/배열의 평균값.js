function solution(numbers) {
    return numbers.reduce((acc, el) => acc += el, 0) / numbers.length
}