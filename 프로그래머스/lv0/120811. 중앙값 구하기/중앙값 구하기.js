function solution(array) {
    // sort 함수로 정렬 후 가운데 인덱스인 수를 리턴한다.
    return array.sort((a, b) => a - b)[parseInt(array.length / 2)]
}