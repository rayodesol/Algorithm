def solution(num_list, n):
    # 방법 2 - slicing
    return num_list[::n]

#     # 방법 1 - for문
#     return [num_list[i] for i in range(0, len(num_list), n)]