function solution(myString, pat) {
    // myString, pat을 모두 대문자로 바꾼 뒤, includes 연산자로 포함 여부를 가린다.
    return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0
}