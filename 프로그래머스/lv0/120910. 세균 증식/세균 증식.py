import math

def solution(n, t):
    # 방법 2 - pow 함수
    return n * math.pow(2, t)

    # # 방법 1 - ** 연산자
    # return n * (2 ** t)