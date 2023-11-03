# 중복 없이 개수를 세기 위해 중복을 허용하지 않는 HashSet 사용
strSet = set()
s = input()

n = len(s)
# 부분 문자열 만들기
for i in range(n):
  for j in range(i, n):
    strSet.add(s[i:j+1])  # 슬라이싱 사용

print(len(strSet))
