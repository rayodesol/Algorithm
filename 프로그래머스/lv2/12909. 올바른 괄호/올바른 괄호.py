def solution(s):
    stack = []
    
    for el in s:
        if el == '(':
            stack.append(el)
        elif not stack:
            return False
        else:
            stack.pop()
    
    return True if not stack else False
            