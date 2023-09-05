def solution(arr1, arr2):
    if len(arr1) > len(arr2):
        return 1
    elif len(arr1) < len(arr2):
        return -1
    elif sum(arr1) > sum(arr2):
        return 1
    elif sum(arr1) < sum(arr2):
        return -1
    else:
        return 0
    
    # # 방법 1 - 배열 합을 변수에 저장
    # else:
    #     sum1 = sum(arr1)
    #     sum2 = sum(arr2)
    #     if sum1 > sum2:
    #         return 1
    #     elif sum1 < sum2:
    #         return -1
    #     else:
    #         return 0