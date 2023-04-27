function solution(n) {
    // 방법 2
    return [...String(n)].reverse().map(el => {return Number(el)})
    
//     // 방법 1
//     const answer = []
    
//     while (n > 0) {
//         answer.push(n % 10) // 10으로 나눈 나머지를 배열에 차례대로 넣고
//         n = Math.floor(n / 10) // n이 0이 될 때까지 10으로 나눈 몫으로 갱신시킨다.
//         // n = parseInt(n / 10) 으로도 가능 - 나누기의 몫을 구하는 방법
//     }
    
//     return answer
}