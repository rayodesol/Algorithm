function solution(my_string, num1, num2) {
    // 리스트로 바꾼 후 글자 바꾸기
    const L = [...my_string]
    const tem = L[num1]
    
    L[num1] = L[num2]
    L[num2] = tem
    
    return L.join('')
}