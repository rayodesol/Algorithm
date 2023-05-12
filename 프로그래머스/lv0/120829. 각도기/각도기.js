function solution(angle) {
    // 방법 2 - 삼항 연산자
    return (0 < angle && angle < 90) ? 1 : (angle === 90) ? 2 : (90 < angle && angle < 180) ? 3 : 4
}