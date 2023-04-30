function solution(n) {
    // n을 String()으로 문자열로 만든 후, 전개 연산자로 한글자씩 띄어 배열로 만든다.
    // sort()로 내림차순으로 정렬한다.
    // join()으로 배열을 문자열로 만들고, Number()로 숫자로 만든다.
    return Number([...String(n)].sort((a, b) => b - a).join(""))
}