function solution(num_list) {
    // filter 함수로 짝수 개수 구하기
    const even = num_list.filter(el => el % 2 === 0).length
    return [even, num_list.length - even] // 홀수 개수 = 배열 길이(전체 개수) - 짝수 개수
}