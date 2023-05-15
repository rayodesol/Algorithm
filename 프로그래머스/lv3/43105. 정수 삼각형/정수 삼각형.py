def solution(triangle):
    height = len(triangle) - 1
    
    for floor in range(height, -1, -1):
        for i in range(floor):
            triangle[floor - 1][i] += max(triangle[floor][i], triangle[floor][i + 1])
    
    return triangle[0][0]