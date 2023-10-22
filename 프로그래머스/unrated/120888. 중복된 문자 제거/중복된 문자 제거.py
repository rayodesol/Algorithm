def solution(my_string):
    s = set()   # hashset 사용
    answer = ''
    
    for ch in my_string:
        if ch not in s:
            s.add(ch)
            answer += ch
    
    return answer