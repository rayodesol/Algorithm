function solution(s) {
    // split 함수로 공백을 기준으로 s를 나눠 배열로 만든다.
    const numArr = s.split(" ").map((el) => Number(el))
    
    // 전개 연산자와 Math.max, Math.min 함수로 최대/최소값을 구한다.
    // String 함수로 문자열로 만든 후, 중간에 공백까지 넣어 문자열을 리턴한다.
    return String(Math.min(...numArr)) + " " + String(Math.max(...numArr))
}