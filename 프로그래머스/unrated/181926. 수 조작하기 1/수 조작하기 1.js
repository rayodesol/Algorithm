function solution(n, control) {
    // 객체의 키를 알파벳으로, 값을 n에 더할 값을 설정
    const obj = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10
    }
    
    // reduce 함수로 각 알파벳에 해당하는 값을 n에 더한다.
    return [...control].reduce((acc, el) => acc += obj[el], n)
}