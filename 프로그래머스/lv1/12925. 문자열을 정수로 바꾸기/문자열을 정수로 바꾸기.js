function solution(s) {
    // 방법 2 - Number()로 숫자화
    return Number(s)
    
    // 방법 1
    // if (s[0] === '+') {
    //     // 앞에 + 부호가 붙었을 때, slice 함수로 부호 제거 후, Number()로 숫자화
    //     return Number(s.slice(1))
    // } else if (s[0] === '-') {
    //     // 앞에 - 부호가 붙었을 때, slice 함수로 부호 제거 후, Number()로 숫자화 + 음수화
    //     return -Number(s.slice(1))
    // } else {
    //     // 부호가 없을 때, Number()로 숫자화
    //     return Number(s)
    // }
}