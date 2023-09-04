function solution(arr, delete_list) {
    const answer = []
    
    // arr의 원소를 순회하며 각 단어가 delete_list에 없을 때만 빈 배열에 단어를 추가한다.
    for (let word of arr) {
        if (!delete_list.includes(word)) {
            answer.push(word)
        }
    }
    
    return answer
}