function solution(n) {
    // 방법 2
    // n을 문자열로 만든 후, 전개 연산자로 한 글자씩 띄어 배열을 만든다.
    // reverse 함수로 배열을 거꾸로 뒤집는다.
    // map 함수로 원소를 모두 숫자형으로 바꾼다.
    return [...String(n)].reverse().map(el => Number(el))
    
//     // 방법 1
//     const answer = []
    
//     while (n > 0) {
//         answer.push(n % 10) // 10으로 나눈 나머지를 배열에 차례대로 넣고
//         n = Math.floor(n / 10) // n이 0이 될 때까지 10으로 나눈 몫으로 갱신시킨다.
//         // n = parseInt(n / 10) 으로도 가능 - 나누기의 몫을 구하는 방법
//     }
    
//     return answer
}