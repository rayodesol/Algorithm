def solution(n):
    answer = 0
    
    # # 방법 1 - 1 ~ n 범위 순회
    # for num in range(1, n + 1):
    #     if n % num == 0: answer += 1
    
    # 방법 2 - 1 ~ n의 제곱근 범위 순회
    for num in range(1, int(n ** (1 / 2)) + 1):
        if n % num == 0: 
            answer += 1
            if n / num != num: answer += 1
        
    return answer