class Solution {
    public int solution(int angle) {
        // 삼항 연산자
        return (angle < 90) ? 1 : (angle == 90) ? 2 : (angle < 180) ? 3 : 4;
    }
}