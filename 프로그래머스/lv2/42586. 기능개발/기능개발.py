import math
from collections import deque

def solution(progresses, speeds):
    # days ; 각 기능의 배포까지 작업일((남은 작업 진도 / 작업 속도)의 올림값)
    days = [math.ceil((100 - progresses[i]) / speeds[i]) for i in range(len(progresses))]
    queue = deque() # 큐 사용(선입선출과 큐 맨 앞 값과의 비교를 위해)
    answer = [] # 작업일이 감소하는 구간 내 기능의 개수
    
    for day in days:
        # 새로운 값이 큐 맨 앞 값보다 클 경우(감소 구간 종료)
        if queue and queue[0] < day:
            answer.append(len(queue))   # 큐 길이(감소 구간 내 기능의 수)
            while queue:    # 큐 비우기
                queue.popleft()
        queue.append(day)   # 새로운 값 큐에 추가 / 감소 구간 축적
    
    if queue:   # 큐에 남아있는 기능 배포
        answer.append(len(queue))
    
    return answer
            
    