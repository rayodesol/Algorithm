function solution(names) {
    // filter 함수로 인덱스가 5의 배수인 원소만 리턴한다.
    return names.filter((el, idx) => idx % 5 === 0)
}