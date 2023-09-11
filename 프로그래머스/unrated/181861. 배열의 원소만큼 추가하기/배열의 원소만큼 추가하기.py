def solution(arr):
    # 방법 2 - 이중 for문 리스트 컴프리헨션
    return [num for num in arr for _ in range(num)]

#     # 방법 1 - 이중 for문 사용. arr를 순회하며, 각 숫자 번씩 반복하며 각 숫자를 추가한다.
#     answer = []
    
#     for num in arr:
#         for _ in range(num):
#             answer.append(num)
            
#     return answer