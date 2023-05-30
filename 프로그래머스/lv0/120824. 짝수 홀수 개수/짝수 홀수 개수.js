function solution(num_list) {
//     // 방법 2
//     const answer = [0, 0]
    
//     for (num of num_list) {
//         // 2로 나눈 나머지가와 인덱스가 같다.
//         answer[num % 2]++
//     }
    
//     return answer
    
    // 방법 1
    // filter 함수로 짝수 개수 구하기
    const even = num_list.filter(el => el % 2 === 0).length
    return [even, num_list.length - even] // 홀수 개수 = 배열 길이(전체 개수) - 짝수 개수
}