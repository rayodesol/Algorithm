function solution(num_list) {
    // // 방법 2 - reduce 함수
    // const multi = num_list.reduce((acc, el) => acc *= el, 1)
    // const sum = num_list.reduce((acc, el) => acc += el, 0)
    
    // 방법 1 - for문
    let multi = 1
    let sum = 0
    
    for (num of num_list) {
        multi *= num
        sum += num
    }
    
    return multi < sum ** 2 ? 1 : 0 
}