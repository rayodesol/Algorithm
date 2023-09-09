function solution(myString) {
    // myString을 'x'를 기준으로 잘라 배열을 만든 후, 빈 문자열이 아닌 것만 남기고, 정렬한다.
    return myString.split('x').filter(el => el != '').sort()
}