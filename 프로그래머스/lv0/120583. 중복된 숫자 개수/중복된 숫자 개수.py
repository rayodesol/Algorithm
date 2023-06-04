def solution(array, n):
    return len(list(filter(lambda x : x == n, array)))