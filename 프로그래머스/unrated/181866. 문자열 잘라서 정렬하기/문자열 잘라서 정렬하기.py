def solution(myString):
    # myString을 'x'를 기준으로 잘라 배열로 만든다.
    # 리스트 컴프리헨션으로 빈 문자열이 아닌 것만 남겨 정렬한다.
    return sorted([letters for letters in myString.split('x') if letters != ''])