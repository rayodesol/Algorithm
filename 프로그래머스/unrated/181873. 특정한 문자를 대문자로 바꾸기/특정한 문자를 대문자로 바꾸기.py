def solution(my_string, alp):
    answer = ''
    
    for ch in my_string:
        if ch == alp:
            answer += ch.upper()
        else:
            answer += ch
            
    return answer