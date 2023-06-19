function solution(num_list, n) {
    // // 방법 2 - splice 함수
    // return num_list.splice(n - 1)
    
    // 방법 1 - slice 함수 사용. n번째이므로 인덱스로는 n-1부터 시작이다.
    return num_list.slice(n - 1)
}