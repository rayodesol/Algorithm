def solution(i, j, k):
    # 방법 2 - 문자열로 바꿔 count함수 사용
    return sum([str(num).count(str(k)) for num in range(i, j + 1)])

#     # 방법 1 - 문자열로 바꿔 split으로 k마다 끊어 그 개수 세기
#     answer = 0
    
#     for num in range(i, j + 1):
#         answer += len(str(num).split(str(k))) - 1
    
#     return answer
