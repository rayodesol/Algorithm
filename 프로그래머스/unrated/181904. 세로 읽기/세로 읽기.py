def solution(my_string, m, c):
    # 방법 2 - 슬라이싱
    # 인덱스가 (c - 1)를 처음으로, m개 간격으로 떨어진 글자들이다
    return my_string[c - 1::m]

#     # 방법 1 - while문
#     answer = ''
#     i = 0
    
#     # m 글자씩 자르면, 맨 앞 글자가 인덱스가 (m의 배수)인 글자가 된다
#     # 이 상태에서 c번째 열은, 인덱스가 ((m의 배수) + (c - 1))인 글자이다
#     while True:
#         if m * i + c - 1 >= len(my_string): break
#         answer += my_string[m * i + c - 1]
#         i += 1
    
#     return answer