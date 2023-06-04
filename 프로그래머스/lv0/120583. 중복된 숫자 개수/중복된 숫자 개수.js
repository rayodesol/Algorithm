function solution(array, n) {
    // filter 함수로 n과 같은 원소들을 남기고, 그 배열의 길이를 리턴한다.
    return array.filter(el => el === n).length
}