function solution(my_string, overwrite_string, s) {
    // slice 함수 사용
    // 앞부분은 my_string의 인덱스 0 ~ (s-1)
    // 중간 부분은 overwrite_string 전체
    // 끝부분은 my_string에서 앞 (s + overwrite_string의 길이)개가 빠진 끝까지
    return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length)
}