function solution(num_list) {
    // filter 함수로 짝수 or 홀수만 있는 배열을 만든 뒤,
    // join 함수로 원소들을 순서대로 이어붙인 문자열을 만든다.
    const even = num_list.filter(el => el % 2 === 0).join('')
    const odd = num_list.filter(el => el % 2 === 1).join('')
    return Number(even) + Number(odd) // 문자열을 숫자로 바꾼 뒤 더해 리턴한다.
}