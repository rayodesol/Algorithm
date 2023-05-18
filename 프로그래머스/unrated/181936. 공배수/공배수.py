def solution(number, n, m):
    # 방법 2
    return int(number % n == 0 and number % m == 0)

    # 방법 1
    # return 1 if number % n == 0 and number % m == 0 else 0