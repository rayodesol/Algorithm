def solution(sides):
    # 방법 2
    sides.sort()
    return 1 if sides[0] + sides[1] > sides[2] else 2

    # # 방법 1
    # return 1 if sum(sides) > 2 * max(sides) else 2