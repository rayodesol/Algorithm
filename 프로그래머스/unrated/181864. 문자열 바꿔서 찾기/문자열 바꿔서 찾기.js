function solution(myString, pat) {
    // 방법 2 - map 사용
    // pat를 A -> B, B -> A 로 바꾸고, myString에 포함되는지 확인한다.
    return myString.includes([...pat].map(el => el === 'A' ? 'B' : 'A').join('')) ? 1 : 0
    
    // // 방법 1 - replaceAll 사용
    // // pat을 A -> C, B -> A, C -> B 로 바꾼 뒤, myString에 포함되는지 확인한다.
    // return myString.includes(pat.replaceAll('A', 'C').replaceAll('B', 'A').replaceAll('C', 'B')) ? 1 : 0
}