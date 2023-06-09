def solution(n):
    # DP 테뷸레이션(바텀-업 방식)
    fibo = [0] * n
    fibo[0] = fibo[1] = 1
    
    for i in range(2, n):
        fibo[i] = fibo[i - 2] + fibo[i - 1]
    
    return fibo[-1] % 1234567