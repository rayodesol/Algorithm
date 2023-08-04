from collections import deque

# 이진수로 변환하는 함수
def binaryNum(num):
    # 이진수가 만들어지는 순서가 2로 나눈 나머지가 생기는 순서의 역순이므로
    # 수를 앞에 추가하는 시간을 줄이기 위해 배열보다 큐를 사용
    queue = deque()
    
    while num != 1:
        queue.appendleft(num % 2) # 2로 나눈 나머지가 큐의 앞부분에서 쌓여간다
        num //= 2
    queue.appendleft(1) # 마지막 몫인 1을 추가

    return ''.join(map(str, list(queue))) # 문자열 형태로 리턴
        
def solution(s):
    answer = [0, 0] # [변환 횟수, 0 개수]
    
    while s != '1': # 이진수 1이 될 때까지 반복
        zero = s.count('0') # 제거되는 0의 개수
        answer[1] += zero
        
        s = binaryNum(len(s) - zero) # 1의 개수로 이진수 만들기
        answer[0] += 1 # 이진 변환 횟수 증가
    
    return answer