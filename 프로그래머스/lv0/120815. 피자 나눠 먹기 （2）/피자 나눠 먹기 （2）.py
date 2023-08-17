def solution(n):
    answer = 1
    while True:
        if answer * 6 % n == 0: # 피자조각이 n의 배수일 때
            return answer
        answer += 1