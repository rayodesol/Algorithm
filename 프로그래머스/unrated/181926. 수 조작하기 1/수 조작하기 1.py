def solution(n, control):
    # 딕셔너리 사용 - 알파벳을 키로, n에 더해줄 값을 값으로 설정
    dic = {'w': 1, 's': -1, 'd': 10, 'a': -10}
    
    for ch in control:
        n += dic[ch]
    
    return n