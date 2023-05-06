function solution(s) {
    const mid = s.length / 2
    
    // 방법 3
    return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[parseInt(mid)]
    
    // // 방법 2 - slice 함수 사용
    // return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.slice(parseInt(mid), parseInt(mid) + 1)
    
    // // 방법 1 - splice 함수 사용
    // return s.length % 2 === 0 ? [...s].splice(mid - 1, 2).join("") : [...s].splice(parseInt(mid), 1).join("")
}