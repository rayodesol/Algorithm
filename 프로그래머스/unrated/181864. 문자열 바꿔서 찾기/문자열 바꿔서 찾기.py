def solution(myString, pat):
    # 방법 2
    # replace 사용. pat을 A -> C, B -> A, C -> B 로 바꾼 뒤, myString에 포함되는지 확인한다.
    return int(pat.replace('A', 'C').replace('B', 'A').replace('C', 'B') in myString)

    # # 방법 1
    # # pat을 A는 B로, B는 A로 바꾼 후, myString에 포함되는지 확인한다.
    # return int(''.join(['B' if ch == 'A' else 'A' for ch in pat]) in myString)