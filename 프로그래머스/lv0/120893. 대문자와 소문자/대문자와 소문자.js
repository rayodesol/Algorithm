function solution(my_string) {
    // 아스키코드로 대소문자를 구분 후 toUpperCase, toLowerCase 함수로 대소문자를 변환한다.
    return [...my_string].map(el => el.charCodeAt() >= 65 &&  el.charCodeAt() <= 90 ? el.toLowerCase() : el.toUpperCase()).join('')
}