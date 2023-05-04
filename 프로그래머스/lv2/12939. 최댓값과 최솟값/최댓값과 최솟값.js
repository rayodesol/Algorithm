function solution(s) {
    const numArr = s.split(" ").map((el) => Number(el))
    return String(Math.min(...numArr)) + " " + String(Math.max(...numArr))
}