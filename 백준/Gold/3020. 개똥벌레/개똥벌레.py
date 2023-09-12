import sys

Input = sys.stdin.readline
N, H = map(int, Input().split())
odd, even = [], []
cnt = [0 for _ in range(H)] # 구간별 장애물 수

# 종유석끼리, 석순끼리 따로 저장
for i in range(N):
  l = int(Input())
  if i % 2: # 종유석
    odd.append(l - 1)
  else: # 석순
    even.append(l - 1)
odd.sort(reverse = True)
even.sort(reverse = True)

# 구간별 종유석의 수
for i in range(H):
  if not odd: break
  if i < odd[-1]:
    cnt[i] += len(odd)
  elif i == odd[-1]:
    cnt[i] += len(odd)
    while odd and i == odd[-1]:
      odd.pop()

# 구간별 석순의 수
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