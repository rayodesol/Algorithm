def solution(cipher, code):
    # 방법 3 - 슬라이싱
    return cipher[code - 1::code]

    # # 방법 2 - 리스트 컴프리핸션, join 함수 사용. 인덱스를 code-1부터 시작해서 code씩 더해간다.
    # return ''.join([cipher[i] for i in range(code - 1, len(cipher), code)])

#     # 방법 1 - for문, enumerate 함수 사용
#     answer = ''
    
#     # n번째는 인덱스로 n-1이므로 인덱스를 code로 나눈 나머지가 code-1일 때의 글자를 합한다.
#     for idx, ch in enumerate(cipher):
#         if idx % code == code - 1: answer += ch
    
#     return answer