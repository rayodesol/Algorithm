# 방법 2 - sort 함수로 정렬 후, 맨 앞 두 수의 곱과 맨 뒤 두 수의 곱 중 큰 값을 리턴한다.
def solution(numbers):
    numbers.sort()
    return max(numbers[0] * numbers[1], numbers[-1] * numbers [-2])
    
# # 방법 1 - 완전탐색
# import sys

# def solution(numbers):
#     answer = -sys.maxsize
#     n = len(numbers)
    
#     for i in range(n):
#         for j in range(i + 1, n):
#             answer = max(numbers[i] * numbers[j], answer)
    
#     return answer