function solution(num_list) {
    const multi = num_list.reduce((acc, el) => acc *= el, 1)
    const sum = num_list.reduce((acc, el) => acc += el, 0)
    return multi < sum ** 2 ? 1 : 0 
}