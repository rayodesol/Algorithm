def solution(arr, flag):
    answer = []
    
    for i in range(len(arr)):
        # true이면, 배열 [arr[i]]를 (arr[i] * 2)번 곱해 원소 개수를 늘린 것을 배열 answer에 더한다
        if flag[i]:
            answer += [arr[i]] * arr[i] * 2
        # false이면, 배열 answer의 뒷부분 원소 arr[i]개를 슬라이싱한 배열로 바꾼다
        else:
            answer = answer[:-arr[i]]
    
    return answer