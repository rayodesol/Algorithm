def solution(a, d, included):
    answer = a if included[0] else 0    # 첫째항 포함여부 따지기
    
    for i in range(1, len(included)):
        if included[i]:
            answer += a + i * d         # i항 값 == a + i * d
    
    return answer