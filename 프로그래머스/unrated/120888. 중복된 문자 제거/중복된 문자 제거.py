def solution(my_string):
    s = set()
    answer = ''
    
    for ch in my_string:
        if ch not in s:
            s.add(ch)
            answer += ch
    
    return answer