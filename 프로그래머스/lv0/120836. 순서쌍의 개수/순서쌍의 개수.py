def solution(n):
    answer = 0
    
    for num in range(1, int(n ** (1 / 2)) + 1):
        if n % num == 0: 
            answer += 1
            if n / num != num: answer += 1
        
    return answer