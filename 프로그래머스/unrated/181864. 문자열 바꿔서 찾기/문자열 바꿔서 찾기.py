def solution(myString, pat):
    changedPat = ''.join(['B' if ch == 'A' else 'A' for ch in pat])
    return 1 if changedPat in myString else 0