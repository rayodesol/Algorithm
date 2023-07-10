def solution(names):
    # 리스트 컴프리핸션, enumerate 로 인덱스가 5의 배수인 이름만 배열로 리턴한다.
    return [name for idx, name in enumerate(names) if idx % 5 == 0]