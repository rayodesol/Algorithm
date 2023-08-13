def solution(my_string, num1, num2):
    # 문자열을 리스트로 만든 후 글자 바꾸기
    L = list(my_string)
    L[num1], L[num2] = L[num2], L[num1]
    return ''.join(L)