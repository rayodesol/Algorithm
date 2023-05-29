def solution(people, limit):
    people.sort()
    twoPeople = 0
    i = 0
    j = len(people) - 1
    
    # 가벼운 사람 + 무거운 사람 조합이 2명 조합을 많이 만들 수 있는 방법
    while i < j:
        # 두 사람 조합이 만들어진 경우
        if people[i] + people[j] <= limit:
            twoPeople += 1
            i += 1
        # 두 사람이 합이 limit를 넘거나, 조합이 만들어진 경우 모두
        # 가장 무거운 사람을 덜 무거운 사람으로 바꿈
        j -= 1 
    
    # 1명씩 조합에서 2명씩 조합의 경우를 뺀 경우가 최종 답
    return len(people) - twoPeople