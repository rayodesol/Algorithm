n = int(input())

# # 방법 2 - for문
# for i in range(1, n + 1):
#     print('*' * i)

# 방법 1 - 이중 for문
for i in range(1, n + 1):
    for _ in range(i):
        print('*', end = '')
    print()