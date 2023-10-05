def solution(my_string, m, c):
    answer = ''
    i = 0
    
    while True:
        if m * i + c - 1 >= len(my_string): break
        answer += my_string[m * i + c - 1]
        i += 1
    
    return answer