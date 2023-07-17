function solution(rsp) {
    // 방법 2 - 객체, 전개 연산자, map, join 사용
    const win = {
        '0': '5',
        '2': '0',
        '5': '2'
    }
    
    return [...rsp].map(el => win[el]).join('')
    
//     // 방법 1 - for문, 삼항 연산자 사용
//     let answer = ''
    
//     for (let el of rsp) {
//         answer += el === '2' ? '0' : el === '0' ? '5' : '2'
//     }
    
//     return answer
}