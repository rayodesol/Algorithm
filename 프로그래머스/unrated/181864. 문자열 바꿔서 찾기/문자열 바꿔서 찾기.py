def solution(myString, pat):
    # pat을 A는 B로, B는 A로 바꾼 후, myString에 포함되는지 확인한다.
    return int(''.join(['B' if ch == 'A' else 'A' for ch in pat]) in myString)