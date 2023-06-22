function solution(my_string, index_list) {
    // reduce 함수 사용
    return index_list.reduce((acc, el) => acc += my_string[el], '')
}