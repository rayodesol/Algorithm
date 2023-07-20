def solution(a, b):
    # f-string으로 ab, ba 조합을 만든 후 int로 숫자로 바꾼다. max 함수로 크기를 비교한다.
    return max(int(f'{a}{b}'), int(f'{b}{a}'))