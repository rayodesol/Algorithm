function solution(sides) {
    // (세 변 합) - 2 * (가장 긴 변) = (두 변 합) - (가장 긴 변) > 0
    return sides.reduce((acc, el) => acc += el, 0) - 2 * Math.max(...sides) > 0 ? 1 : 2
}