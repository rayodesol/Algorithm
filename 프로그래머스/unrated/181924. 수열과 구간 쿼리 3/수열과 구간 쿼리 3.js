function solution(arr, queries) {
    for (let [x, y] of queries) {
        temp = arr[x]
        arr[x] = arr[y]
        arr[y] = temp
    }
    
    return arr
}