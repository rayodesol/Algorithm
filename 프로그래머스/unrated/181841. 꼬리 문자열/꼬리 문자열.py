def solution(str_list, ex):
    # 방법 2 - 리스트 컴프리핸션, join 함수
    return ''.join([string for string in str_list if ex not in string])
    
#     # 방법 1 - for문
#     answer = ''
    
#     for s in str_list:
#         if ex not in s:
#             answer += s
        
#     return answer