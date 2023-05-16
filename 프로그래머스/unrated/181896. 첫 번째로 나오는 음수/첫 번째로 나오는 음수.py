def solution(num_list):
    # 방법 2 - enumerate 함수
    for idx, el in enumerate(num_list):
        if el < 0: return idx
    return -1

    # # 방법 1 - for문
    # for i in range(len(num_list)):
    #     if num_list[i] < 0: return i
    # return -1