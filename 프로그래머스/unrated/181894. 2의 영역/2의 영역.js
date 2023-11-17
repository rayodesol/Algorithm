function solution(arr) {
    let start = -1
    let end = -1
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2 && start === -1) {
            start = i
            end = i
        } else if (arr[i] === 2) {
            end = i
        }
    }
    
    return start === -1 ? [-1] : arr.slice(start, end + 1)
}