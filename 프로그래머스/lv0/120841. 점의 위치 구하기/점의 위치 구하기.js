function solution(dot) {
    // 방법 2 - 삼항 연산자를 연속으로, x좌표, y좌표가 각각 양/음수인지 따라 리턴값 정하기
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3
    
//     // 방법 1
//     // x,y좌표 곱이 양수이면 1,3사분면 / 음수이면 2,4사분면
//     // y좌표가 양수이면 1,2사분면 / 음수이면 3,4사분면
    
//     // x,y좌표 곱이 양/음수인지에 따라 더하는 수를 정한다.
//     const byMul = dot[0] * dot[1] > 0 ? 0 : 1
    
//     // y좌표가 양/음수인지에 따라 1,2 or 3,4 사분면이 될 수 있다.
//     // 곱에 따라 정해진 더하는 수(byMul)로 1 or 2 사분면이 되거나, 3 or 4 사분면이 된다.
//     return dot[1] > 0 ? 1 + byMul : 3 + byMul
}