function solution(phone_number) {
    // repeat 함수로 *를 번호의 4자리를 뺀 만큼 반복
    // slice 함수로 번호의 뒷 4자리 붙이기
    return "*".repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4)
}