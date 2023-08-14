def solution(age):
    # age를 문자열로 만들어 숫자별로 구분하고, int함수로 숫자화한 뒤,
    # 0이 a가 되기 위해 97를 더해 아스키코드화 시킨다. join함수로 문자열로 만들어 리턴한다.
    return ''.join([chr(int(num) + 97) for num in str(age)])