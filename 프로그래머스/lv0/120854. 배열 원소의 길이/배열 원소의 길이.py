def solution(strlist):
    # 방법 2 - 컴프리헨션
    return [len(str) for str in strlist]

    # # 방법 1 - map 함수 사용
    # return list(map(len, strlist))