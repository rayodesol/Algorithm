function solution(angle) {
    // // 방법 3 - filter 함수
    // // 분류기준이 되는 값들의 배열에 기준 각보다 큰 값들을 filter 시키면,
    // // 필터링된 원소 수만큼이 답이 된다.
    // return [1, 90, 91, 180].filter(x => angle >= x).length
    
    // 방법 2 - 삼항 연산자
    return (angle < 90) ? 1 : (angle === 90) ? 2 : (angle < 180) ? 3 : 4
    
    // // 방법 1 - if-else문 
    // if (angle < 90) {
    //     return 1
    // } else if (angle === 90) {
    //     return 2
    // } else if (angle < 180) {
    //     return 3
    // } else {
    //     return 4
    // }
}