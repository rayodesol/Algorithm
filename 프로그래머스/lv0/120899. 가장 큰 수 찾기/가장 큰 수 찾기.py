def solution(array):
    answer = [0, 0]
    
    for i, num in enumerate(array):
        if num > answer[0]:
            answer[0] = num
            answer[1] = i
    
    return answer