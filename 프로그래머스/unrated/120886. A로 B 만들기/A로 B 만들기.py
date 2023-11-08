def solution(before, after):
    dic = dict()
    
    # before의 각 글자를 키로, 개수를 값으로 하는 딕셔너리 생성
    for ch in before:
        if ch in dic:
            dic[ch] += 1
        else:
            dic[ch] = 1
    
    # after의 글자가 딕셔너리에 없거나, 값이 0이면 0 리턴. 아닐 경우 1 리턴.
    for ch in after:
        if ch in dic:
            if dic[ch] == 0: return 0
            else: dic[ch] -= 1
        else: return 0

    return 1