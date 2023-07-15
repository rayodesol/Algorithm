function solution(str_list, ex) {
    // filter, includes 함수로 str_list 중 ex를 포함하지 않는 것들만 남긴 후,
    // join 함수로 하나의 문자열로 만든다.
    return str_list.filter(el => !el.includes(ex)).join('')
}