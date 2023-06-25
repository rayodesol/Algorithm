def solution(start, end):
    # 방법 2 - range
    return list(range(start, end - 1, -1))

    # # 방법 1 - for문
    # return [num for num in range(start, end - 1, -1)]