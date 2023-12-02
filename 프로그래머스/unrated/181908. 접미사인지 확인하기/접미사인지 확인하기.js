function solution(my_string, is_suffix) {
    // my_string의 맨 끝으로부터 is_suffix의 글자 수만큼의 문자열이 is_suffix와 같은지 비교
    return my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0
}