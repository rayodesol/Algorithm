n = int(input())
A = {i+1: i+1 for i in range(n)} # O(n)
i = 1

for key in range(1, 2*n-1):
    if key % 2 == 1 and key < 2*n-1:
        del A[key]
        A[n+i] = A.pop(key+1)
        i += 1

print(A[2*n-1])