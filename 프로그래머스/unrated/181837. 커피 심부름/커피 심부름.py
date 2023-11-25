def solution(order):
    answer = 0
    
    for menu in order:
        if 'americano' in menu or menu == 'anything': # 핫/아이스 상관없이 '아메리카노'인 것(in 연산자 사용)과 '아무거나'일 때(== 연산자 사용)
            answer += 4500
        elif 'cafelatte' in menu: # 핫/아이스 상관없이 '카페라떼'일 때(in 연산자 사용)
            answer += 5000
    
    return answer
