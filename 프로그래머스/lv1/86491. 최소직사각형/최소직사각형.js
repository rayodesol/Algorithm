function solution(sizes) {
    let w = 0
    let h = 0
    
    for (let size of sizes) {
        if (size[0] > size[1]) {
            w = Math.max(w, size[0])
            h = Math.max(h, size[1])
        } else {
            w = Math.max(w, size[1])
            h = Math.max(h, size[0])
        }
    }
    
    return w * h
}