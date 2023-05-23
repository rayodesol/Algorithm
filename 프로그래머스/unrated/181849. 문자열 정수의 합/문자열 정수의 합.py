def solution(num_str):
    # 방법 2
    return sum(map(int, list(num_str)))

#     # 방법 1 - for문
#     ans = 0
    
#     for num in list(num_str):
#         ans += int(num)
    
#     return ans