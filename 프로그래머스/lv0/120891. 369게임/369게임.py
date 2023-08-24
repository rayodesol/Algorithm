def solution(order):
    # count 함수 사용. 3의 개수 + 6의 개수 + 9의 개수 리턴.
    string = str(order)
    return string.count('3') + string.count('6') + string.count('9')