function solution(my_string, letter) {
    // 방법 3 - split 함수로 letter를 기준으로 분리시킨 문자열들을 join 함수로 하나의 문자열로 만든다.
    return my_string.split(letter).join('')
    
    // // 방법 2 - replaceAll 함수로 letter를 빈 문자열로 대체한다.
    // return my_string.replaceAll(letter, '')
    
    // // 방법 1 - 전개연산자, filter, join 함수
    // // 전개연산자로 배열로 만들어 filter 함수로 letter를 제외한 뒤 join 함수로 문자열로 만든다.
    // return [...my_string].filter(el => el !== letter).join('')
}