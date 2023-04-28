function solution(n) {
    const x = Math.sqrt(n); // n의 제곱근 x 구하기
    
    // 제곱근이 정수인지 판별 - x를 parseInt를 통해 정수로 만든 것과 비교
    // 삼항연산자로 반환값 정하기
    return x === parseInt(x) ? (x + 1) ** 2 : -1;
}