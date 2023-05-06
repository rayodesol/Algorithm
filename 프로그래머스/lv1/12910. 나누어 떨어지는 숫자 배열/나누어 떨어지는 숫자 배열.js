function solution(arr, divisor) {
    const ans = arr.filter((el) => el % divisor === 0)
    
    return ans.length === 0 ? [-1] : ans.sort((a, b) => a - b)
}