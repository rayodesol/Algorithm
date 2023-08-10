function solution(num_list) {
    let odd = 0
    let even = 0
    
    for (let i = 0; i < num_list.length; i++) {
        i % 2 ? even += num_list[i] : odd += num_list[i]
    }
    
    return odd > even ? odd : even
}