def solution(arr, idx):
    answer = -1
    
    for i in range(idx, len(arr)):
        if arr[i]:
            answer = i
            break
    
    return answer