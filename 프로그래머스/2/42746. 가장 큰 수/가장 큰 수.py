def solution(numbers):
    strings = list(map(str, numbers)) # 문자열로 바꾸기
    
    # 3번씩 반복한 문자열을 기준으로, 역순으로 큰것부터 배열
    strings.sort(key = lambda s: s * 3, reverse = True)
    
    return str(int(''.join(strings))) # 정렬된 배열 문자열로 만들기