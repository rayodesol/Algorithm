def solution(num_list):
    answer = 0
    
    for num in num_list:
        # num이 1이 될 때까지 2로 나눈 몫으로 갱신하며 횟수를 센다
        while num > 1:
            num //= 2
            answer += 1
        
    return answer