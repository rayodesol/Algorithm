function solution(n) {
    // 숫자 n을 문자열로 바꾼 후 전개 연산자로 배열로 만든다.
    // reduce 함수 안에서 배열의 원소들을 숫자로 만든 후 합산해 리턴한다.
    return [...String(n)].reduce((acc, el) => {
        return acc += Number(el)
    }, 0);
}