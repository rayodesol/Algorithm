function solution(price) {
    // 방법 2
    // [할인 기준 금액, 할인율을 반영해 곱할 수]인 원소를 가진 배열을 기준 금액이 내림차순 되도록 만든다.
    const discount = [[500000, 0.8], [300000, 0.9], [100000, 0.95], [10, 1]]
    
    for (let i in discount) {
        // 기준 금액 이상이면, 리턴되어 함수가 종료되고,
        // 기준 금액 이상이 아니라면, 더 적은 금액인 다음 차례 기준 금액으로 넘어간다.
        if (price >= discount[i][0]) return Math.floor(price * discount[i][1])
    }
    
    // // 방법 1 - if-else문
    // if (price >= 500000) {
    //     return Math.floor(price * 0.8)
    // } else if (price >= 300000) { // else-if문으로 50만원 미만 중 30만원 이상
    //     return Math.floor(price * 0.9)
    // } else if (price >= 100000) { // else-if문으로 30만원 미만 중 10만원 이상
    //     return Math.floor(price * 0.95)
    // } else { // 10만원 미만인 금액은 제 값을 지불해야 한다.
    //     return price
    // }
}