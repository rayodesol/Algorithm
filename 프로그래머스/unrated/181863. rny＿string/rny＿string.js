function solution(rny_string) {
    // 방법 2 - reaplce, join 함수
    return rny_string.split("m").join("rn")
    
    // // 방법 1 - replaceAll 함수
    // return rny_string.replaceAll("m", "rn")
}