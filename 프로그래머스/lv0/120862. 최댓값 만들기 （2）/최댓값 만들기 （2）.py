import sys

def solution(numbers):
    answer = -sys.maxsize
    n = len(numbers)
    
    for i in range(n):
        for j in range(i + 1, n):
            answer = max(numbers[i] * numbers[j], answer)
    
    return answer