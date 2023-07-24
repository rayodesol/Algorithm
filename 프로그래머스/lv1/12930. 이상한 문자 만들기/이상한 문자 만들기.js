function solution(s) {
    return s.split(' ').map(word => {
        return [...word].map((el, i) => i % 2 ? el.toLowerCase() : el.toUpperCase()).join('')
    }).join(' ')
}