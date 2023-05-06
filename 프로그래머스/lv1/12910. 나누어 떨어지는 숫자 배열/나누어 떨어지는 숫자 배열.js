function solution(arr, divisor) {
    // filter 함수로 나누어 떨어지는 수로 배열을 만든다.
    const ans = arr.filter((el) => el % divisor === 0)
    
    // 삼항 연산자로 나누어 떨어지는 수의 유무에 따라 처리
    // 있다면, sort 함수로 오름차순 정렬
    return ans.length === 0 ? [-1] : ans.sort((a, b) => a - b)
}