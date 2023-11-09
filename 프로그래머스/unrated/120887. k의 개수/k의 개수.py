def solution(i, j, k):
    answer = 0
    
    for num in range(i, j + 1):
        answer += len(str(num).split(str(k))) - 1
    
    return answer