function solution(num, count = 0) {
    return (num == 1) ? ((count >= 500) ? -1 : count) : solution((num % 2 == 0) ? num / 2 : (num * 3) + 1, ++count);
}

// function solution(num) {
//     let cnt = 0
    
//     // 1이 되거나 반복 횟수가 500번을 넘기 전까지 무한루프
//     while (true) {
//         if (num === 1) return cnt // 1이 될 때, 반복 횟수 리턴
//         if (cnt > 500) return -1 // 반복 횟수가 500번을 넘을 때, -1 리턴
        
//         // 삼항 연산자로 짝/홀수인지에 따라 숫자 변경
//         num = (num % 2 === 0) ? num / 2 : num * 3 + 1
//         cnt += 1 // 반복 횟수 1씩 증가
//     }
    
//     return cnt
// }