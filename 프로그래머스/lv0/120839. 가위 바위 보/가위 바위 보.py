def solution(rsp):
    # 딕셔너리로 이기는 경우를 짝지어 놓는다
    dic = {'0': '5', '2': '0', '5': '2'}
    
    # 방법 2 - 리스트 컴프리핸션, join 사용
    return ''.join([dic[el] for el in rsp])
    
    # # 방법 1 - map, lambda, join 사용
    # return ''.join(map(lambda x: dic[x], rsp))