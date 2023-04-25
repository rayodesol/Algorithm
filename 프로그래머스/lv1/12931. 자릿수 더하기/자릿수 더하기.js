function solution(n) {
    return [...String(n)].reduce((acc, el) => {
        return acc += Number(el)
    }, 0);
}