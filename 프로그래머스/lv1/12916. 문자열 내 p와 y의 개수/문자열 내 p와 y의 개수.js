function solution(s) {
    // 방법 2 - reduce 함수
    // toLowerCase() 로 문자열을 모두 소문자로 바꾸고,
    // 전개 연산자로 문자열을 배열로 만들어 reduce 함수 사용
    // p일 땐 누산기가 +1, y일 땐 누산기가 -1
    // 삼항연산자로 누산기 값이 0일 때 true 반환
    return [...s.toLowerCase()].reduce((acc, el) => {
        if (el === 'p') acc++;
        if (el === 'y') acc--;
        return acc;
    }, 0) === 0 ? true : false;
    
//     // 방법 1 - for문
//     let cnt = 0;
    
//     // 문자열을 for문으로 한글자씩 순회하며
//     // P/p일 땐 카운팅을 +로, Y/y일 땐 카운팅을 -로
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === 'p' || s[i] === 'P') cnt += 1;
//         if (s[i] === 'y' || s[i] === 'Y') cnt -= 1;
//     }
    
//     // 삼항연산자 사용. 카운팅한 결과가 0일 때만 p, y의 개수가 같을 때이다.
//     return cnt === 0 ? true : false;
}