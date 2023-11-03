s = input()
strSet = set()

n = len(s)
for i in range(n):
  for j in range(i, n):
    strSet.add(s[i:j+1])

print(len(strSet))