def solution(cipher, code):
    answer = ''
    
    for idx, ch in enumerate(cipher):
        if idx % code == code - 1: answer += ch
    
    return answer