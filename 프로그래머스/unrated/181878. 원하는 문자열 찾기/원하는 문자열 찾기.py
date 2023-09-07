def solution(myString, pat):
    # myString과 pat 모두 대문자로 바꾼 뒤, in 연산자로 포함 여부를 가린다.
    myString = myString.upper()
    pat = pat.upper()
    
    return 1 if pat in myString else 0