def solution(arr):
    # arr의 원소들을 순서대로, 처음 등장하는 수만 저장하기 위해
    # 스택에 들어간 마지막 수와 비교해서 이미 스택에 있는 수라면 스택에 넣지 않는다.
    stack = []
    
    for num in arr:
        if stack and stack[-1] == num: continue
        stack.append(num)
    
    return stack