def solution(n_str):
    start = 0
    for i, el in enumerate(n_str):
        if el != '0':
            start = i
            break
    return n_str[i:]