def solution(numbers, direction):
    answer = []
    
    if direction == 'right':
        answer.append(numbers.pop())
        answer += numbers
    else:
        answer = numbers[1:]
        answer.append(numbers[0])
    
    return answer