def solution(str1, str2):
    # 방법 2 - in 연산자
    return 1 if str2 in str1 else 2

    # # 방법 1 - split 함수로 str1을 str2 기준으로 나눴을 때 나눠지면 str2가 포함되었다는 것
    # return 1 if len(str1.split(str2)) > 1 else 2