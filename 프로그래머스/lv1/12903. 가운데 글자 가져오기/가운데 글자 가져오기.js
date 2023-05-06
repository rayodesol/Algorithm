function solution(s) {
    const mid = s.length / 2
    // return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.slice(parseInt(mid), parseInt(mid) + 1)
    
    return s.length % 2 === 0 ? [...s].splice(mid - 1, 2).join("") : [...s].splice(parseInt(mid), 1).join("")
}