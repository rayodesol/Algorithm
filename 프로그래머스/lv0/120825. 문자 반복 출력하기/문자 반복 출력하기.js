function solution(my_string, n) {
    return [...my_string].map(el => el.repeat(n)).join('')
}