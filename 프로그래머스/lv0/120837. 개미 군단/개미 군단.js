function solution(hp) {
    // 방법 2
    return parseInt(hp / 5) + parseInt(hp % 5 / 3) + (hp % 5 % 3)
            
//     // 방법 1
//     let answer = 0
    
//     answer += parseInt(hp / 5)  // 장군개미 수(병력을 장군개미 공격력으로 나눈 몫)
//     hp %= 5                     // 남은 병력(병력을 장군개미 공격력으로 나눈 나머지)
//     answer += parseInt(hp / 3)  // 병정개미 수(남은 병력을 병정개미 공격력으로 나눈 몫)
//     hp %= 3                     // 남은 병력(남은 병력을 병정개미 공격력으로 나눈 나머지)
//     answer += hp                // 일개미 공격력이 1이므로 남은 병력이 필요한 일개미의 수
    
//     return answer
}