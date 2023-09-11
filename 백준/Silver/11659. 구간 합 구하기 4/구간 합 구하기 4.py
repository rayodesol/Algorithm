import sys

Input = sys.stdin.readline
N, M = map(int, Input().split())
arr = list(map(int, Input().split()))

# dp[i]는 인덱스 1부터 i까지 수의 합
dp = [0 for _ in range(N + 1)]
for i in range(1, N + 1):
  dp[i] += dp[i - 1] + arr[i - 1]

# (i~j 합) = (1~j 합) - (1~(i-1) 합)
for _ in range(M):
    i, j = map(int, Input().split())
    print(dp[j] - dp[i - 1])