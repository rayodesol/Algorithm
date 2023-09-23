def solution(n):
    # for문으로 n을 1 ~ n으로 나눴을 때 나누어 떨어지는 수 찾기
    return [num for num in range(1, n + 1) if n % num == 0]