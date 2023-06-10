def solution(s1, s2):
    answer = 0
    
    for el_s1 in s1:
        if el_s1 in s2: answer += 1
    
    return answer