function solution(box, n) {
    return box.reduce((acc, el) => acc *= parseInt(el / n), 1)
}