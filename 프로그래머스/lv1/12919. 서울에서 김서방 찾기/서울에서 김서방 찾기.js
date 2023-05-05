function solution(seoul) {
    // 방법 2 - indexOf 함수로 Kim의 위치 리턴
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`
    
    // // 방법 1 - for문으로 seoul의 모든 원소를 순회하며 Kim일 때 인덱스 리턴
    // for (let i = 0; i < seoul.length; i++) {
    //     if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`
    // }
}