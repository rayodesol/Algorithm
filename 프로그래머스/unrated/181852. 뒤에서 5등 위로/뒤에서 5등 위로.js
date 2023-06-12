function solution(num_list) {
    // 방법 2 - sort, slice 함수
    num_list.sort((a, b) => a - b)
    return num_list.slice(5)
    
    // // 방법 1 - sort, filter 함수
    // num_list.sort((a, b) => a - b) // sort 함수로 오름차순 정렬 후,
    // return num_list.filter((el, idx) => idx >= 5) // filter 함수로 인덱스가 5이상인 것만 리턴한다.
}