def solution(my_string):
    return sorted([int(ch) for ch in my_string if ch.isdigit()])