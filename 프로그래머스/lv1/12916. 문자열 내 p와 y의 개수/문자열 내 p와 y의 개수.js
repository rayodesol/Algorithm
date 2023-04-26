function solution(s) {
    let cnt = 0;
    
    // 문자열을 for문으로 한글자씩 순회하며
    // P/p일 땐 카운팅을 +로, Y/y일 땐 카운팅을 -로
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p' || s[i] === 'P') cnt += 1;
        if (s[i] === 'y' || s[i] === 'Y') cnt -= 1;
    }
    
    // 카운팅한 결과가 0일 때만 p, y의 개수가 같을 때이다.
    return cnt === 0 ? true : false;
}