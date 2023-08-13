def solution(my_string, num1, num2):
    # 문자열을 리스트로 만든 후 글자 바꾸기
    list_my_string = list(my_string)
    tem = list_my_string[num1]
    list_my_string[num1] = list_my_string[num2]
    list_my_string[num2] = tem
    
    return ''.join(list_my_string)