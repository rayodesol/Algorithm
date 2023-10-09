function solution(date1, date2) {
    // 연도, 월, 일 순으로 비교한다.
    if (date1[0] < date2[0]) return 1
    else if (date1[0] > date2[0]) return 0
    else if (date1[1] < date2[1]) return 1
    else if (date1[1] > date2[1]) return 0
    else if (date1[2] < date2[2]) return 1
    else return 0
}
