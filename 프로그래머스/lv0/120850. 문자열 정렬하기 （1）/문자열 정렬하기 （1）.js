function solution(my_string) {
    // filter, isNaN 함수로 숫자인 글자만 고른 후, map, Number 함수로 숫자로 만들고,
    // sort 함수로 오름차순 정렬한다.
    return [...my_string].filter(el => !isNaN(el)).map(el => Number(el)).sort((a, b) => a - b)
}