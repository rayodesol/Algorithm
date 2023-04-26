function solution(s){
    let cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p' || s[i] === 'P') cnt += 1;
        if (s[i] === 'y' || s[i] === 'Y') cnt -= 1;
    }
    
    return cnt === 0 ? true : false;
}