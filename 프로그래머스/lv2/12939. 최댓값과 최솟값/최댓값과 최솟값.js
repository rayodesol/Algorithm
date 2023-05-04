function solution(s) {
    // split 함수로 공백을 기준으로 s를 나눠 배열로 만든다.
    const numArr = s.split(" ")
    
    // 전개 연산자와 Math.max, Math.min 함수로 최대/최소값을 구한다.
    // + 연산자로 중간에 공백까지 넣어 문자열을 리턴한다.
    return Math.min(...numArr) + " " + Math.max(...numArr)
}