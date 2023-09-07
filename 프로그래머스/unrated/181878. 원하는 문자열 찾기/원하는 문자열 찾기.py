def solution(myString, pat):
    # myString과 pat 모두 대문자로 바꾼 뒤, in 연산자로 포함 여부를 가린다.
    return 1 if pat.upper() in myString.upper() else 0