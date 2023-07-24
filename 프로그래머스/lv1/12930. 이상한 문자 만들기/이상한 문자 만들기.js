function solution(s) {
    // split 함수로 단어별로 나눈 후, map 함수로 각 단어에 접근한다.
    // 전개 연산자로 각 단어를 알파벳으로 나눠, map 함수로 짝/홀수번째에 맞춰 대/소문자로 바꾸고, join 함수로 한 단어로 만든다.
    // 나뉘었던 각 단어를 join 함수로 띄어쓰기를 포함해 문자열로 만든다.
    return s.split(' ').map(word => {
        return [...word].map((el, i) => i % 2 ? el.toLowerCase() : el.toUpperCase()).join('')
    }).join(' ')
}