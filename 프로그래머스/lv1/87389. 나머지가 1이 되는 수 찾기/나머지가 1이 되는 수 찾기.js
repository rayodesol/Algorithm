function solution(n) {
    // for문으로 n보다 작은 자연수를 1부터 순회하면서 나머지가 1일 때, 리턴한다.
    for (let i = 1; i < n; i++) {
        if (n % i === 1) return i;
    }
}