function solution(num_list) {
    // 방법 2 - findIndex 함수
    return num_list.findIndex(el => el < 0)
    
    // // 방법 1 - for문
    // for (let i = 0; i < num_list.length; i++) {
    //     if (num_list[i] < 0) return i
    // }
    // return -1
}