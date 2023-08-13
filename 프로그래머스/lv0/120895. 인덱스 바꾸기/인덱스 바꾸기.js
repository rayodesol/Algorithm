function solution(my_string, num1, num2) {
    // 방법 2 - 리스트로 바꾼 후 글자 바꾸기, 구조분해할당 사용
    let arr = my_string.split('');
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    return arr.join('');
    
//     // 방법 1 - 리스트로 바꾼 후 글자 바꾸기
//     const L = [...my_string]
//     const tem = L[num1]
    
//     L[num1] = L[num2]
//     L[num2] = tem
    
//     return L.join('')
}