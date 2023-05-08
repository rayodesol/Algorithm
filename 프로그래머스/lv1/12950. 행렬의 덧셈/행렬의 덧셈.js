function solution(arr1, arr2) {
//     // 방법 2
//     const ans = []
    
//     for (let i = 0; i < arr1.length; i++) {
//         ans.push(arr1[i].map((el, idx) => el + arr2[i][idx]))
//     }
    
    // 방법 1
    const ans = Array.from(Array(arr1.length), () => Array(arr1[0].length).fill(0))
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[0].length; j++) {
            ans[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    
    return ans;
}