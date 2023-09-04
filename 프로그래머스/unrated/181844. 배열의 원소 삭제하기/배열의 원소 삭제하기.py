def solution(arr, delete_list):
    # 방법 2 - 방법 1를 리스트 컴프리헨션으로
    return [word for word in arr if word not in delete_list]

#     # 방법 1
#     answer = []
    
#     # arr의 원소를 순회하며 각 단어가 delete_list에 없을 때만 빈 배열에 단어를 추가한다.
#     for word in arr:
#         if word not in delete_list:
#             answer.append(word)
            
#     return answer