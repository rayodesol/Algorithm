function solution(number) {
    return [...number].reduce((acc, el) => acc += Number(el), 0) % 9
}