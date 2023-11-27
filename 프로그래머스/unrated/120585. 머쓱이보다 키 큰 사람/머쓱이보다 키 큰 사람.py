def solution(array, height):
    return len(list(filter(lambda n : n > height, array)))