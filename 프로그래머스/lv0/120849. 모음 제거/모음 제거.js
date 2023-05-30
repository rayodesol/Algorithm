function solution(my_string) {
    let answer = '';
    
    for (letter of my_string) {
        if (!'aeiou'.includes(letter)) {
            answer += letter
        }
    }
    
    return answer
}