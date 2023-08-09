def solution(num_list):
    odd, even = 0, 0
    
    for i in range(len(num_list)):
        if i % 2: # 인덱스가 홀수일 때, 짝수번째
            even += num_list[i]
        else:
            odd += num_list[i]
    
    return even if even > odd else odd