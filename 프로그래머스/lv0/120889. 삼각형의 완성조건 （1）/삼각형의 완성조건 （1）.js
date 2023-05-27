function solution(sides) {
    // 방법 2 - sort 함수
    sides.sort((a, b) => a - b) // 오름차순 정렬
    return sides[0] + sides[1] > sides[2] ? 1 : 2
    
    // 방법 1 - reduce 함수, Math.max 함수
    // // (세 변 합) - 2 * (가장 긴 변) = (두 변 합) - (가장 긴 변) > 0
    // return sides.reduce((acc, el) => acc += el, 0) - 2 * Math.max(...sides) > 0 ? 1 : 2
}