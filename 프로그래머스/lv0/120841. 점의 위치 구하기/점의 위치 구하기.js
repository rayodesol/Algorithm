function solution(dot) {
    const byMul = dot[0] * dot[1] > 0 ? 0 : 1
    return dot[1] > 0 ? 1 + byMul : 3 + byMul
}