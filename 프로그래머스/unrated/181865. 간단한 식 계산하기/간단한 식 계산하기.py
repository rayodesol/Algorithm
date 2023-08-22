def solution(binomial):
    # 방법 2 - eval 함수
    return eval(binomial)

#     # 방법 1 - 문자열을 띄어쓰기 기준으로 숫자와 연산자 분리 후, if-elif문으로 연산자에 따라 처리
#     arr = binomial.split(' ')
    
#     if arr[1] == '+':
#         return int(arr[0]) + int(arr[2])
#     elif arr[1] == '-':
#         return int(arr[0]) - int(arr[2])
#     else:
#         return int(arr[0]) * int(arr[2])