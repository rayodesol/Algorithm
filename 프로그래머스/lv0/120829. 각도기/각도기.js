function solution(angle) {
    // 방법 2 - 삼항 연산자
    return (0 < angle && angle < 90) ? 1 : (angle === 90) ? 2 : (90 < angle && angle < 180) ? 3 : 4
    
    // 방법 1 - if-else문 
    // if (0 < angle && angle < 90) {
    //     return 1
    // } else if (angle === 90) {
    //     return 2
    // } else if (90 < angle && angle < 180) {
    //     return 3
    // } else {
    //     return 4
    // }
}