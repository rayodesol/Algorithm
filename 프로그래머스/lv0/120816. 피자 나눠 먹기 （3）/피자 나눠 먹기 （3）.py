def solution(slice, n):
    # 방법 2
    return (n - 1) // slice + 1

    # # 방법 1 - 피자 판 수 * 조각 수가 n이상이 될 때까지 피자 판 수를 1씩 증가
    # i = 1
    # while True:
    #     if slice * i >= n: return i
    #     i += 1
