function solution(num_list) {
    let multi = 1
    let sum = 0
    
    for (num of num_list) {
        multi *= num
        sum += num
    }
    
    return multi < sum * sum ? 1 : 0
}