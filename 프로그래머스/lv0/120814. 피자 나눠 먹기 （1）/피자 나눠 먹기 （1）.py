def solution(n):
    # 방법 1 - 나누어 떨어지는지에 따라 다르게 처리하기
    return n // 7 if n % 7 == 0 else n // 7 + 1