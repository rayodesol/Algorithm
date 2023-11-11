def solution(arr, queries):
    # 방법 2
    for x, y in queries:
        arr[x], arr[y] = arr[y], arr[x]
    
    # 방법 1
    # for x, y in queries:
    #     temp = arr[x]
    #     arr[x] = arr[y]
    #     arr[y] = temp
    
    return arr