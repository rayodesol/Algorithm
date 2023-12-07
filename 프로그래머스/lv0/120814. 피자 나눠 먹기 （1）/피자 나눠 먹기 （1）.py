import math

def solution(n):
    # 방법 2 - math.ceil 함수로 n을 7로 나눈 값을 올림
    return math.ceil(n / 7)

    # # 방법 1 - 나누어 떨어지는지에 따라 다르게 처리
    # return n // 7 if n % 7 == 0 else n // 7 + 1
