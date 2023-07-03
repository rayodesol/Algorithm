function solution(myString) {
    // toLowerCase 함수로 모두 소문자로 바꾼 후, replaceAll 함수로 모든 a를 A로 바꾼다.
    return myString.toLowerCase().replaceAll('a', 'A')
}