def solution(prices):
    # 
    answer = [i for i in range(len(prices) - 1, -1, -1)]
    stack = []
    
    for idx, price in enumerate(prices):
        while stack and stack[-1][0] > price:
            answer[stack[-1][1]] = idx - stack[-1][1]
            stack.pop()
        stack.append((price, idx))
    
    return answer
