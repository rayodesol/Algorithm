def solution(my_string):
    answer = ""
    
    for letter in my_string:
        if letter not in "aeiou":
            answer += letter
            
    return answer