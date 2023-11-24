function solution(order) {
    let answer = 0
    
    for (let menu of order) {
        if (menu.includes('americano') || menu === 'anything') {
            answer += 4500
        } else if (menu.includes('cafelatte')) {
            answer += 5000
        }     
    }
    
    return answer
}