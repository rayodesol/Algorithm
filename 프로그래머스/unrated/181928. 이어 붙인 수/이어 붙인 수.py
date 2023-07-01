def solution(num_list):
    # # filter 함수
    # even = ''.join(map(str, filter(lambda x: x % 2 == 0, num_list)))
    # odd = ''.join(map(str, filter(lambda x: x % 2 == 1, num_list)))
    
    # 리스트 컴프리핸션
    even = ''.join([str(num) for num in num_list if num % 2 == 0])
    odd = ''.join([str(num) for num in num_list if num % 2 == 1])
    return int(even) + int(odd)