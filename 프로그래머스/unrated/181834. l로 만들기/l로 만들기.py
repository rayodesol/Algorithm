def solution(myString):
    # 아스키코드 상 l보다 적은 수는 l로 바꾼다. 리스트 컴프리헨션, join함수 사용.
    return ''.join(['l' if ord(ch) < ord('l') else ch for ch in myString])