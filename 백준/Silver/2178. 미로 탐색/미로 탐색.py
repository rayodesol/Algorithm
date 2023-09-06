N, M = map(int, input().split())
maze = [list(map(int, input())) for _ in range(N)]
visited = [[0]*M for _ in range(N)]
dx, dy = [-1, 0, 1, 0], [0, -1, 0, 1]

queue = [(0, 0)]
visited[0][0] = 1

while queue:
    x, y = queue.pop(0)

    if x == N-1 and y == M-1:
        print(visited[x][y])
        break

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < N and 0 <= ny < M:
            if maze[nx][ny] == 1 and visited[nx][ny] == 0:
                visited[nx][ny] = visited[x][y] + 1
                queue.append((nx, ny))