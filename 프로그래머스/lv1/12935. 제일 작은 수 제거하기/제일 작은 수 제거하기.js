function solution(arr) {
    // 방법 2
    // Math.min 함수로 배열의 최솟값을 찾고, indexOf 함수로 최솟값의 위치를 찾은 뒤,
    // splice 함수로 최솟값만 배열에서 잘라낸다.
    // arr의 길이에 따라 [-1] 혹은 arr를 리턴한다.
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
    return arr.length === 0 ? [-1] : arr
    
    // // 방법 1
    // arr의 길이가 1일 경우엔 바로 [-1]를 리턴한다.
    // Math.min 함수로 arr의 최솟값을 구한 뒤,
    // filter 함수로 최솟값이 아닌 수들로만 이루어진 배열을 만든다.
    // return arr.length === 1 ? [-1] : arr.filter((el) => el !== Math.min(...arr))
}