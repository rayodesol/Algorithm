def solution(my_string, letter):
    # 방법 2 - replace 함수
    return my_string.replace(letter, '')

    # # 방법 1 - split, join 함수
    # return ''.join(my_string.split(letter))