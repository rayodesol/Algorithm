def solution(my_string):
    return ''.join([ch.upper() if ch.islower() else ch.lower() for ch in my_string])