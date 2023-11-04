def solution(my_string):
    answer = 0
    
    for ch in my_string:
        if 48 <= ord(ch) and ord(ch) <= 57:
            answer += int(ch)
    
    return answer