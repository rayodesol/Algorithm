def solution(dot):
    return 1 + int(dot[0] < 0) if dot[1] > 0 else 3 + int(dot[0] > 0)