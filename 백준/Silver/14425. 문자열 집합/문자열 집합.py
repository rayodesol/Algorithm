import sys

input = sys.stdin.readline
n, m = map(int, input().split())

s = set()
for _ in range(n):
  s.add(input())

answer = 0
for _ in range(m):
  word = input()
  if word in s:
    answer += 1

print(answer)