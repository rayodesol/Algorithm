def solution(a, b, c):
    if a != b and b != c and c != a:
        return a + b + c
    elif a == b and b == c and c == a:
        return 27 * a ** 6
    else:
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2)