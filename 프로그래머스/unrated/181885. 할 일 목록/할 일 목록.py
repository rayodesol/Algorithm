def solution(todo_list, finished):
    # 리스트 컴프리핸션, enumerate 사용
    return [todo_list[idx] for idx, boolean in enumerate(finished) if not boolean]