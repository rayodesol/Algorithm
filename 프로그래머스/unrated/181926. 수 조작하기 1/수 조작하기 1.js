function solution(n, control) {
    // 방법 2 - reduce 함수로 각 알파벳에 접근하고, switch 함수로 각 알파벳에 맞는 연산을 한다.
    return [...control].reduce((acc, el) => {
        switch(el) {
            case 'w':
                return acc += 1
            case 's':
                return acc -= 1
            case 'd':
                return acc += 10
            case 'a':
                return acc -= 10
        }
    }, n)
    
//     // 방법 1
//     // 객체의 키를 알파벳으로, 값을 n에 더할 값을 설정
//     const obj = {
//         'w': 1,
//         's': -1,
//         'd': 10,
//         'a': -10
//     }
    
//     // reduce 함수로 각 알파벳에 해당하는 값을 n에 더한다.
//     return [...control].reduce((acc, el) => acc += obj[el], n)
}