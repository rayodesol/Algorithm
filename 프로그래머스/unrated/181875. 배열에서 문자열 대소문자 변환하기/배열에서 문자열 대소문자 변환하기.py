def solution(strArr):
    # 리스트 컴프리핸션, enumerate
    return [el.upper() if idx % 2 == 1 else el.lower() for idx, el in enumerate(strArr)]