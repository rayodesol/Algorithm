function solution(my_string) {
    // 방법 2
    // 전개 연산자로 문자열을 배열로 만든 뒤,
    // filter, includes 함수로 모음이 아닌 것만 배열에 남긴다.
    // join 함수로 배열을 문자열로 만든다.
    return [...my_string].filter(el => !'aeiou'.includes(el)).join('')
    
//     // 방법 1 - for문, includes 함수 사용
//     let answer = '';
    
//     for (letter of my_string) {
//         if (!'aeiou'.includes(letter)) {
//             answer += letter
//         }
//     }
    
//     return answer
}