function solution(arr, delete_list) {
    // 방법 2 - filter함수를 사용해 delete_list에 포함되지 않는 원소만 남긴다.
    return arr.filter(el => !delete_list.includes(el))
    
//     // 방법 1 - for문
//     const answer = []
    
//     // arr의 원소를 순회하며 각 단어가 delete_list에 없을 때만 빈 배열에 단어를 추가한다.
//     for (let word of arr) {
//         if (!delete_list.includes(word)) {
//             answer.push(word)
//         }
//     }
    
//     return answer
}