function solution(todo_list, finished) {
    return todo_list.filter((el, idx) => !finished[idx]) // filter 함수 사용
}