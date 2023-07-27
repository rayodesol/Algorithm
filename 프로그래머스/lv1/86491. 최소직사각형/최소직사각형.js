function solution(sizes) {
    // 방법 2
    const [w, h] = sizes.reduce(([long, short], [w, h]) => {
        return [Math.max(long, Math.max(w, h)), Math.max(short, Math.min(w, h))]
    }, [0, 0])
    
    return w * h
    
//     // 방법 1
//     let w = 0
//     let h = 0
    
//     for (let size of sizes) {
//         if (size[0] > size[1]) {
//             w = Math.max(w, size[0])
//             h = Math.max(h, size[1])
//         } else {
//             w = Math.max(w, size[1])
//             h = Math.max(h, size[0])
//         }
//     }
    
//     return w * h
}