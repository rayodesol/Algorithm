function solution(num_list, n) {
    // // 방법 2 - findIndex 함수
    // return num_list.findIndex(el => el === n) !== -1 ? 1 : 0
    
    // 방법 1 - includes 함수
    return num_list.includes(n) ? 1 : 0
}