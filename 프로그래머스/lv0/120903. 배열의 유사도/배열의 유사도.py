def solution(s1, s2):
    # 방법 2 - set(집합) 교집합
    return len(set(s1) & set(s2))

#     # 방법 1 - for문, in 연산자
#     answer = 0
    
#     for el_s1 in s1:
#         if el_s1 in s2: answer += 1
    
#     return answer