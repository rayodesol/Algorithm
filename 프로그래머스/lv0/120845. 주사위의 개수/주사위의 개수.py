def solution(box, n):
    # 방법 2
    x, y, z = box
    return (x // n) * (y // n) * (z // n)

#     # 방법 1
#     answer = 1
    
#     for length in box:
#         answer *= length // n
    
#     return answer