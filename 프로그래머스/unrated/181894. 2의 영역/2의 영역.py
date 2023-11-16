def solution(arr):
    start = -1
    end = -1
    
    for i in range(len(arr)):
        if arr[i] == 2 and start == -1:
            start = i
            end = i
        elif arr[i] == 2:
            end = i
    
    return [-1] if start == -1 else arr[start:end + 1]
            