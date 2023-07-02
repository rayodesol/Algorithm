def solution(my_string, alp):
    # 방법 2 - 리스트 컴프리핸션
    return ''.join([ch.upper() if ch == alp else ch for ch in list(my_string)])
    
#     # 방법 1 - for문
#     answer = ''
    
#     for ch in my_string:
#         if ch == alp:
#             answer += ch.upper()
#         else:
#             answer += ch
            
#     return answer