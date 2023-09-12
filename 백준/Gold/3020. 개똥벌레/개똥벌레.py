import sys

Input = sys.stdin.readline
N, H = map(int, Input().split())
odd, even = [], []
cnt = [0 for _ in range(H)]

for i in range(N):
  l = int(Input())
  if i % 2:
    odd.append(l - 1)
  else:
    even.append(l - 1)
odd.sort(reverse = True)
even.sort(reverse = True)

# 종유석
for i in range(H):
  if not odd: break
  if i < odd[-1]:
    cnt[i] += len(odd)
  elif i == odd[-1]:
    cnt[i] += len(odd)
    while odd and i == odd[-1]:
      odd.pop()

# 석순
for i in range(H - 1, 0, -1):
  if not even: break
  if H - 1 - i < even[-1]:
    cnt[i] += len(even)
  elif H - 1 - i == even[-1]:
    cnt[i] += len(even)
    while even and H - 1 - i == even[-1]:
      even.pop()

min_barrier = min(cnt)
print(min_barrier, cnt.count(min_barrier))