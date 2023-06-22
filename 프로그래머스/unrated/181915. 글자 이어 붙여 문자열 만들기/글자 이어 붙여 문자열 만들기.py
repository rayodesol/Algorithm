def solution(my_string, index_list):
    # 방법 2
    return ''.join([my_string[idx] for idx in index_list])

#     # 방법 1 - for문
#     answer = ''
    
#     for idx in index_list:
#         answer += my_string[idx]
        
#     return answer