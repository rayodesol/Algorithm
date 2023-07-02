function solution(my_string, alp) {
    // 방법 2 - map, join 함수
    return [...my_string].map(el => {
        if (el == alp) return el.toUpperCase()
        else return el
    }).join('')
    
    // // 방법 1 - replaceAll 함수
    // return my_string.replaceAll(alp, alp.toUpperCase())
}