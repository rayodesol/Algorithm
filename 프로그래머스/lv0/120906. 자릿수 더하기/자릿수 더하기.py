def solution(n):
    # 방법 2
    return sum(map(int, str(n)))

    # 방법 1 - while문
    # answer = 0
    # while n > 0:
    #     answer += n % 10
    #     n //= 10
    # return answer