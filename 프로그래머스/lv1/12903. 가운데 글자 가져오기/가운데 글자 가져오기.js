function solution(s) {
    // return s.length % 2 === 0 ? [...s].splice((s.length / 2 - 1), 2).join("") : [...s].splice((parseInt(s.length / 2)), 1).join("")
    
    return s.length % 2 === 0 ? s.slice(s.length / 2 - 1, s.length / 2 + 1) : s.slice(parseInt(s.length / 2), parseInt(s.length / 2) + 1)
}