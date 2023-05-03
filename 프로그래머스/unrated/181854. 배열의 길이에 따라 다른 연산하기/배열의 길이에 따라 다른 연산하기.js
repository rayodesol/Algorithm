function solution(arr, n) {
    // 배열 길이가 짝/홀수인지에 따라 시작하는 인덱스 값을 달리 한다.
    let start = (arr.length % 2 === 0) ? 1 : 0;
    
    // while문으로 인덱스를 2씩 증가하며 원소에 n을 더한다.
    while (start < arr.length) {
        arr[start] += n;
        start += 2;
    }
    
    return arr;
}