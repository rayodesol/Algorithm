function solution(s) {
    const mid = s.length / 2
    
    // 방법 2 - slice 함수 사용
    return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.slice(parseInt(mid), parseInt(mid) + 1)
}