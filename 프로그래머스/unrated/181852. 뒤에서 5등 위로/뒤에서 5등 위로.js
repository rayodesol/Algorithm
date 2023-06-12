function solution(num_list) {
    num_list.sort((a, b) => a - b) // sort 함수로 오름차순 정렬 후,
    return num_list.filter((el, idx) => idx >= 5) // filter 함수로 인덱스가 5이상인 것만 리턴한다.
}