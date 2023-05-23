def solution(num_str):
    ans = 0
    
    for num in list(num_str):
        ans += int(num)
    
    return ans