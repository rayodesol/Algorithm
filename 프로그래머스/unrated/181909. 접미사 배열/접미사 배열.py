def solution(my_string):
    # 방법 2 - 방법1을 리스트 컴프리헨션으로
    return sorted([my_string[i:] for i in range(len(my_string))])

#     # 방법 1
#     answer = []
    
#     # 0부터 인덱스 끝까지를 시작점으로 슬라이싱한 문자열을 배열에 추가한다
#     for i in range(len(my_string)):
#         answer.append(my_string[i:])
    
#     return sorted(answer)   # sorted함수로 정렬한다