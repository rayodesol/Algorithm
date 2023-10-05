def solution(my_string, m, c):
    answer = ''
    i = 0
    
    # m 글자씩 자르면, 맨 앞 글자가 인덱스가 (m의 배수)인 글자가 된다
    # 이 상태에서 c번째 열은, 인덱스가 ((m의 배수) + (c - 1))인 글자이다
    while True:
        if m * i + c - 1 >= len(my_string): break
        answer += my_string[m * i + c - 1]
        i += 1
    
    return answer