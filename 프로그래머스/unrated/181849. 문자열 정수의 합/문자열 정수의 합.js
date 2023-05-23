function solution(num_str) {
    // split 함수로 문자열을 한 글자씩 띄어 배열로 만든 뒤,
    // reduce 함수로 숫자로 바꾼(Number 함수 사용) 각 자릿수의 합을 구한다.
    return num_str.split("").reduce((acc, el) => acc += Number(el), 0)
}