def solution(my_string):
    # # 방법 2 - reversed 함수
    # return ''.join(reversed(my_string))

    # 방법 1 - 슬라이싱
    return my_string[::-1]