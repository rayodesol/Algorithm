function solution(num_list, n) {
    // filter 함수로 인덱스가 n의 배수인 것만 남긴다.
    return num_list.filter((el, idx) => idx % n === 0)
}