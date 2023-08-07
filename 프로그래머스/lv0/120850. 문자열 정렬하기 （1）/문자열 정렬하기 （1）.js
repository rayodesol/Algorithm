function solution(my_string) {
    return [...my_string].filter(el => !isNaN(el)).map(el => Number(el)).sort((a, b) => a - b)
}