def solution(num_list):
    even = ''.join([str(num) for num in num_list if num % 2 == 0])
    odd = ''.join([str(num) for num in num_list if num % 2 == 1])
    return int(even) + int(odd)