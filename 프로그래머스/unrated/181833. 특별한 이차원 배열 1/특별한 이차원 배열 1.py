def solution(n):
    # 방법 2
    answer = [[0 for _ in range(n)] for _ in range(n)]
    
    for i in range(n):
        answer[i][i] = 1
    
    return answer

    # # 방법 1
    # return [[1 if i == j else 0 for j in range(n)] for i in range(n)]