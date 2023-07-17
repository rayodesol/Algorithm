def solution(rsp):
    # 딕셔너리, map, lambda, join 사용
    dic = {'0': '5', '2': '0', '5': '2'}
    
    return ''.join(map(lambda x: dic[x], rsp))