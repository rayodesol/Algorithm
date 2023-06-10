function solution(num_list) {
    const size = num_list.length
    
    if (num_list[size - 1] > num_list[size - 2]) {
        num_list.push(num_list[size - 1] - num_list[size - 2])
    } else {
        num_list.push(num_list[size - 1] * 2)
    }
    
    return num_list
}