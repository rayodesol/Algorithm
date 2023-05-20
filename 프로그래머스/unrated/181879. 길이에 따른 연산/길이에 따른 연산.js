function solution(num_list) {
    // reduce 함수
    return num_list.length >= 11 ? num_list.reduce((acc, el) => acc += el, 0) : num_list.reduce((acc, el) => acc *= el, 1)
}