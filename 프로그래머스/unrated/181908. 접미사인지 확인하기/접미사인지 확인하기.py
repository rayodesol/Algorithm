def solution(my_string, is_suffix):
    # 슬라이싱 사용
    # my_string의 맨 끝으로부터 is_suffix의 글자 수만큼의 문자열이 is_suffix와 같은지 비교
    return 1 if my_string[-len(is_suffix):] == is_suffix else 0