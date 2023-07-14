def solution(n):
    answer = 0
    
    if n % 2:
        for n in range(1, n + 1, 2):
            answer += n
    else:
        for n in range(2, n + 1, 2):
            answer += n ** 2
    
    return answer