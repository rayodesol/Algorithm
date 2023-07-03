function solution(myString) {
    // 방법 2 - 전개 연산자, map 함수, 삼항 연산자, join 함수 사용
    // 배열로 만들어 map 함수로 A이거나 a일 경우 a로, 아닐 경우 소문자로 바꾸고, 문자열로 바꾼다.
    return [...myString].map(el => {
        return el === 'a' || el === 'A'? 'A' : el.toLowerCase()
    }).join('')
    
    // // 방법 1 - toLowerCase 함수로 모두 소문자로 바꾼 후, replaceAll 함수로 모든 a를 A로 바꾼다.
    // return myString.toLowerCase().replaceAll('a', 'A')
}