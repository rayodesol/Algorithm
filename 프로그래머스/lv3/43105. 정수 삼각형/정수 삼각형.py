def solution(triangle):
    height = len(triangle) - 1
    
    # 맨 아래부터 1층씩 올라가며 최댓값이 되는 합으로 값을 갱신한다.(테뷸레이션)
    for floor in range(height, -1, -1):
        for i in range(floor):
            triangle[floor - 1][i] += max(triangle[floor][i], triangle[floor][i + 1])
    
    # print(triangle)
    return triangle[0][0]