def solution(arr):
    stack = []
    
    for num in arr:
        if stack and stack[-1] == num: continue
        stack.append(num)
    
    return stack