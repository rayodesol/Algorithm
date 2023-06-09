def solution(numbers, hand):
    # 시작점 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, *, #]
    upToNum = {
        0: [0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 1], # 0까지 거리
        2: [3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 4], # 2까지 거리
        5: [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 3], # 5까지 거리
        8: [1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 2]  # 8까지 거리
    }
    
    ans = ""
    l = 10 # "*"
    r = 11 # "#"
    
    for num in numbers:
        if num == 1 or num == 4 or num == 7:
            ans += "L"
            l = num
        elif num == 3 or num == 6 or num == 9:
            ans += "R"
            r = num
        else:
            if upToNum[num][l] < upToNum[num][r]:
                ans += "L"
                l = num
            elif upToNum[num][l] > upToNum[num][r]:
                ans += "R"
                r = num
            else:
                if hand == "left":
                    ans += "L"
                    l = num
                else:
                    ans += "R"
                    r = num
            
    return ans