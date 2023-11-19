def solution(my_string, indices):
    answer = ''
    j = 0
    
    indices.sort()
    
    for i in range(len(my_string)):
        if j < len(indices) and i == indices[j]:
            j += 1
            continue
        answer += my_string[i]
    
    return answer