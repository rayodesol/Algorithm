def solution(myStr):
    answer = []
    before = 0
    
    for i in range(len(myStr)):
        if myStr[i] == 'a' or myStr[i] == 'b' or myStr[i] =='c':
            if myStr[before:i] != '':
                answer.append(myStr[before:i])
            before = i + 1
    
    if myStr[before:] != '':
        answer.append(myStr[before:])
    
    return ["EMPTY"] if len(answer) == 0 else answer