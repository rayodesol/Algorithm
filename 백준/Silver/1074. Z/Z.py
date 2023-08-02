def z(n, x, y):
    global ans

    if x == r and y == c:
        print(ans)
        return

    if n == 1:
        ans += 1
        return

    if not (x <= r < x+n and y <= c < y+n):
        ans += n * n
        return

    z(n//2, x, y)
    z(n//2, x, y+n//2)
    z(n//2, x+n//2, y)
    z(n//2, x+n//2, y+n//2)


N, r, c = map(int, input().split())
ans = 0
z(2**N, 0, 0)