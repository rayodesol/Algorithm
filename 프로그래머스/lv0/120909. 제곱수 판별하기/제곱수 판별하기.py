import math

def solution(n):
    # n의 제곱근이 정수인지 확인한다
    return 1 if math.sqrt(n) == int(math.sqrt(n)) else 2