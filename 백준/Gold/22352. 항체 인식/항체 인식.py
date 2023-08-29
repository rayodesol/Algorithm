import sys

def is_diff(a, b, n, m):
    for i in range(n):
        for j in range(m):
            if a[i][j] != b[i][j]:
                return (i, j)
    return False

def dfs(r, c, antibody, iii):
    visited[r][c] = True
    bfState = before[r][c]
    before[r][c] = antibody
    
    for nr, nc in [[0, -1], [0, 1], [-1, 0], [1, 0]]:   # 상, 하, 좌, 우
        #print("---------------------------", iii, "--------------------------------")
        iii += 1
        if 0 <= r+nr < N and 0 <= c+nc < M and before[r+nr][c+nc] == bfState and not visited[r+nr][c+nc]:
            #before[r+nr][c+nc] = antibody
            #print(before)
            dfs(r+nr, c+nc, antibody, iii)
    
Input = sys.stdin.readline
N, M = map(int, Input().split())
before = [Input().split() for _ in range(N)]
after = [Input().split() for _ in range(N)]
visited = [[False for _ in range(M)] for _ in range(N)]

bfDFSorBFS = is_diff(before, after, N, M)    # 이름 마저 정하기!!!

if bfDFSorBFS:
    row, col = bfDFSorBFS
    i = 1#################################
    dfs(row, col, after[row][col], i)

    #print("dfs 후", before)
    #print()
    #print("dfs 후", after)
    #print()
    # dfs or bfs
    
    ''' test용
    print("dfs, bfs할 예정")
    print(bfDFSorBFS)
    '''
    
    if is_diff(before, after, N, M):
        print("NO")
    else:
        print("YES")
else:   # 촬영결과가 같으므로 DFS or BFS할 필요 없이 백신 효과가 있는 것
    print("YES")