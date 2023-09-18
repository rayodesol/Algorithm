import math
from collections import deque

def solution(progresses, speeds):
    days = [math.ceil((100 - progresses[i]) / speeds[i]) for i in range(len(progresses))]
    queue = deque()
    answer = []
    
    for day in days:
        if queue and queue[0] < day:
            answer.append(len(queue))
            while queue:
                queue.popleft()
        queue.append(day)
    
    if queue:
        answer.append(len(queue))
    
    return answer
            
    