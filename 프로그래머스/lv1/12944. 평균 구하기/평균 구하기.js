function solution(arr) {
    const answer = arr.reduce((acc, item) => {
        return acc += item;
    }, 0);

    return answer / arr.length;
}
