function solution(arr) {
    // reduce 함수로 배열의 모든 원소를 합한다.
    const answer = arr.reduce((acc, item) => {
        return acc += item;
    }, 0);

    // 합산한 수를 배열의 크기로 나눠 평균값을 구한다.
    return answer / arr.length;
}