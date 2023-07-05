import sys, heapq

Input = sys.stdin.readline
N = int(Input())
heap = list(map(int, Input().split()))

heapq.heapify(heap)

for _ in range(N-1):
    num = list(map(int, Input().split()))
    for i in range(N):
        if num[i] > heap[0]:
            heapq.heappush(heap, num[i])
            heapq.heappop(heap)

print(heap[0])