def solution(rny_string):
    # 방법 2 - replace 함수
    return rny_string.replace('m', 'rn')

    # # 방법 1 - split, join 함수 사용
    # return 'rn'.join(rny_string.split('m'))