function solution(arr1, arr2) {
//     // 방법 4 - map 함수 2번
//     return arr1.map((row, rowIdx) => row.map((num, colIdx) => num + arr2[rowIdx][colIdx]));
    
//     // 방법 3 - for문 안에 map 함수
//     const ans = []
    
//     for (let i = 0; i < arr1.length; i++) {
//         ans.push(arr1[i].map((el, idx) => el + arr2[i][idx]))
//     }
    
//     // 방법 2 - 이중 for문
//     const ans = [] // 빈 배열
    
//     for (let i = 0; i < arr1.length; i++) {
//         ans[i] = []
//         for (let j = 0; j < arr1[0].length; j++) {
//             ans[i].push(arr1[i][j] + arr2[i][j]) // push 함수
//         }
//     }
    
//     return ans;
    
    // 방법 1 - 이중 for문
    // 행, 열의 크기가 같은, 모든 원소가 0인 배열로 초기화
    const ans = Array.from(Array(arr1.length), () => Array(arr1[0].length).fill(0))
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[0].length; j++) {
            ans[i][j] = arr1[i][j] + arr2[i][j] // 값 변경
        }
    }
    
    return ans;
}