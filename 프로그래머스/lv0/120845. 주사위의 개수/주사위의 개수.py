def solution(box, n):
    # 방법 1
    answer = 1
    
    for length in box:
        answer *= length // n
    
    return answer