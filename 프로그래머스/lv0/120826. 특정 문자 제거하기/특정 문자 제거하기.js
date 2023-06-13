function solution(my_string, letter) {
    return [...my_string].filter(el => el !== letter).join('')
}