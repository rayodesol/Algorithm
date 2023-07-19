def solution(number, k):
    answer = []
    
    for num in number:
        # 스택에 넣은 수 보다 큰 수가 있다면 큰 수가 맨 앞으로 오도록 스택을 비운다.
        # 제거할 개수가 남을 때까지, 스택 안에 수가 존재할 때, 스택 안의 수를 제거하는 while문
        while k > 0 and answer and answer[-1] < num:
            answer.pop()
            k -= 1 # 제거되는 수를 줄인다.
        answer.append(num)
    
    # 스택 안의 수 중 k개를 제거한 수 길이만큼만 답에 해당한다.
    return ''.join(answer[:len(answer)-k])