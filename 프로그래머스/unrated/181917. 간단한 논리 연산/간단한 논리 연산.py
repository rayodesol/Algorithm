def solution(x1, x2, x3, x4):
    # 방법 2
    return (x1 or x2) and (x3 or x4)

    # # 방법 1
    # result1 = True if x1 or x2 else False
    # result2 = True if x3 or x4 else False
    # return True if result1 and result2 else False