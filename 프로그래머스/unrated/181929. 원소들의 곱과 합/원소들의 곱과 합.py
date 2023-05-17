def solution(num_list):
    mul = 1
    for num in num_list:
        mul *= num
    
    return 1 if mul < sum(num_list) ** 2 else 0