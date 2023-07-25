from itertools import permutations

def solution(k, dungeons):
    n = len(dungeons)
    cases = list(permutations(dungeons, len(dungeons)))
    max_cnt = 0
    
    for case in cases:
        cnt = 0
        state = k
        # print(case)
        for i in range(n):
            if state >= case[i][0]:
                cnt += 1
                state -= case[i][1]
        max_cnt = max(max_cnt, cnt)
    
    return max_cnt