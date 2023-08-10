function solution(num_list) {
    // 방법 2 - filter, reduce 함수
    const odd = num_list.filter((el, i) => !(i % 2)).reduce((acc, el) => acc += el, 0)
    const even = num_list.filter((el, i) => i % 2).reduce((acc, el) => acc += el, 0)
    return odd > even ? odd : even
    
//     // 방법 1 - for문
//     let odd = 0
//     let even = 0
    
//     for (let i = 0; i < num_list.length; i++) {
//         i % 2 ? even += num_list[i] : odd += num_list[i]
//     }
    
//     return odd > even ? odd : even
}