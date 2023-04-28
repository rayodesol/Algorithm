function solution(n) {
    const x = Math.sqrt(n);
    
    return x === parseInt(x) ? (x + 1) ** 2 : -1;
}