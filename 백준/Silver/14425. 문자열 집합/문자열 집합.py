import sys

input = sys.stdin.readline
n, m = map(int, input().split())

# 집합 내 포함 여부를 묻는 문제이므로
# 데이터 중복이 되지 않고, 삽입, 탐색의 시간복잡도가 O(1)인 HashSet 사용
# n개의 문자열로 이루어진 집합 s 만들기
s = set()
for _ in range(n):
  s.add(input())

# m개의 문자열 중 집합 s에 포함되어 있는 것 세기
answer = 0
for _ in range(m):
  word = input()
  if word in s:
    answer += 1

print(answer)
