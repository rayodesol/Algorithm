function solution(array, height) {
    // filter 함수로 height보다 큰 값들의 배열을 구한 뒤, 배열의 길이를 리턴
    return array.filter(el => el > height).length
}
