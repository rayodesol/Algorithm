def solution(binomial):
    arr = binomial.split(' ')
    
    if arr[1] == '+':
        return int(arr[0]) + int(arr[2])
    elif arr[1] == '-':
        return int(arr[0]) - int(arr[2])
    else:
        return int(arr[0]) * int(arr[2])