def solution(arr):
    # 이중 for문 사용. arr를 순회하며, 각 숫자 번씩 반복하며 각 숫자를 추가한다.
    answer = []
    
    for num in arr:
        for i in range(num):
            answer.append(num)
            
    return answer