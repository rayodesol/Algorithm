function solution(array) {
    // 방법 2 - Math.max, indexOf 함수
    const max_num = Math.max(...array)
    return [max_num, array.indexOf(max_num)]
    
//     // 방법 1 - for문
//     const answer = [0, 0]
    
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > answer[0]) {
//             answer[0] = array[i]
//             answer[1] = i
//         }
//     }
    
//     return answer
}