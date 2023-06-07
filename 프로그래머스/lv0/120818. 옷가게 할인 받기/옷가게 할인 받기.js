function solution(price) {
    if (price >= 500000) {
        return Math.floor(price * 0.8)
    } else if (price >= 300000) { // else-if문으로 50만원 미만 중 30만원 이상
        return Math.floor(price * 0.9)
    } else if (price >= 100000) { // else-if문으로 30만원 미만 중 10만원 이상
        return Math.floor(price * 0.95)
    } else { // 10만원 미만인 금액은 제 값을 지불해야 한다.
        return price
    }
}