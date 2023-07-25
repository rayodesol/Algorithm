from itertools import permutations

def solution(k, dungeons):
    n = len(dungeons)
    cases = list(permutations(dungeons, n)) # 순열(탐험하는 순서가 다른 모든 조합)
    max_cnt = 0 # 최대 던전 수(답)
    
    for case in cases: # 각 경우마다
        cnt = 0 # 탐험한 던전 수
        state = k # 남은 피로도
        for i in range(n):
            if state >= case[i][0]:
                cnt += 1
                state -= case[i][1]
        max_cnt = max(max_cnt, cnt)
    
    return max_cnt