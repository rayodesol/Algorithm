function solution(order) {
    // 방법 2 - 문자열로 바꿔 전개 연산자로 각 숫자로 이루어진 배열을 만든다.
    // filter함수로 3, 6, 9일 경우만 남기고, length함수로 개수를 센다.
    return [...String(order)].filter(el => el === '3' || el === '6' || el === '9').length
    
//     // 방법 1 - 문자열로 바꾼 후 각 숫자를 순회하며 3, 6, 9의 개수를 센다.
//     let cnt = 0
//     const str = String(order)
    
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '3' || str[i] === '6' || str[i] === '9') {
//             cnt += 1
//         }
//     }
    
//     return cnt
}