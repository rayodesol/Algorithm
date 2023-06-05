def solution(slice, n):
    i = 1
    while True:
        if slice * i >= n: return i
        i += 1