def solution(num_list):
    # 방법 3 -for문
    even = ''
    odd = ''
    
    for num in num_list:
        if num % 2 == 0:
            even += str(num)
        else:
            odd += str(num)
    
    # # 방법 2 - filter 함수
    # even = ''.join(map(str, filter(lambda x: x % 2 == 0, num_list)))
    # odd = ''.join(map(str, filter(lambda x: x % 2 == 1, num_list)))
    
    # # 방법 1 - 리스트 컴프리핸션
    # even = ''.join([str(num) for num in num_list if num % 2 == 0])
    # odd = ''.join([str(num) for num in num_list if num % 2 == 1])
    
    return int(even) + int(odd)